import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import api, { loginUser } from "../services/api";
import useAlert from "./useAlert";

export const useAuth =() => {
    const {user, token, signed, setUser, setToken, logout} = useContext(AuthContext)
    const {setAlert} = useAlert();

    const authLogin = (username: string, password: string) => {
        loginUser(username, password).then(response => {
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
    const authLogout = () => {
        logout()
        setAlert({text: 'Usuário deslogado com sucess', type: 'success'})
    }

    return { user, token, signed ,authLogin, authLogout}
}