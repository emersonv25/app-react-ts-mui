import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import api, { loginUser, registerUser } from "../services/api";
import useAlert from "./useAlert";

export const useAuth =() => {
    const {user, token, signed, setUser, setToken, logout} = useContext(AuthContext)
    const {setAlert} = useAlert();

    async function authLogin (username: string, password: string) {
        await loginUser(username, password).then(response => {
            setUser(response.user)
            setToken(response.token)
            api.defaults.headers.Authorization = `Bearer ${response.token}`
            localStorage.setItem("@Auth:user", JSON.stringify(response.user))
            localStorage.setItem("@Auth:token", response.token)
        }).catch(err => {
            console.log(err)
            //alert(err.response.data ? err.response.data : err.message)
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

    function authLogout () {
        logout()
        setAlert({text: 'Usuário deslogado com sucess', type: 'success'})
    }

    return { user, token, signed ,authLogin, authRegister, authLogout}
}