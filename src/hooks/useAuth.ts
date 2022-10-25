import { useContext, useMemo } from "react"
import { AuthContext } from "../contexts/AuthContext"
import api, { getProfile, loginUser, registerUser } from "../services/api";
import useAlert from "./useAlert";

export const useAuth =() => {
    const {user, token, signed, setUser, setToken, logout} = useContext(AuthContext)
    const {setAlert} = useAlert();

    useMemo(() => {
        const storagedToken = localStorage.getItem("@Auth:access_token")
        if(storagedToken)
        {
            authGetProfile(storagedToken).then(() => {
                setToken(storagedToken)
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
            }).catch(() => {
                logout()
                setAlert({text: "Sessão expirada", type: 'warning'})
            })
        }
        else{
            logout()
        }
    },[]);


    async function authLogin (username: string, password: string) {
        await loginUser(username, password).then(async response => {
            setToken(response.access_token)
            api.defaults.headers.Authorization = `Bearer ${response.access_token}`
            localStorage.setItem("@Auth:access_token", response.access_token)
            await authGetProfile(response.access_token)
        }).catch(err => {
            console.log(err)
            setAlert({text: err.message, type: 'error'})
        });
    }
    async function authRegister (username: string, fullName: string, email: string, password: string){
        await registerUser(username, fullName, email, password).then(response => {
            setAlert({text: 'Usuario cadastrado com sucesso', type: 'success'})
        }).catch(err => {
            setAlert({text: 'Falha ao cadastrar usuário: ' + err.message, type: 'error'})
        })
        
    }
    async function authGetProfile (token: string)
    {
        await getProfile(token).then(response => {
            localStorage.setItem("@Auth:user", JSON.stringify(response))
            setUser(response)

        }).catch(err => {
            console.log(err)
            setAlert({text: err.message, type: 'error'})
        })
    }
    function authLogout () {
        logout()
        setAlert({text: 'Usuário deslogado com sucess', type: 'success'})
    }

    return { user, token, signed ,authLogin, authRegister, authLogout}
}