import { createContext, useContext, useEffect, useState } from "react";
import { User, UserLogin } from "../@types/user";
import api from "../services/api";
interface IAuthProviderProps {
    children: React.ReactNode
}

interface AuthContextType {
    signed: boolean;
    user: User | null;
    token: string;
    setUser(user: User | null) : void;
    setToken(token: string): void;
    logout(): void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState('');

    useEffect(() => {

        const storagedUser = localStorage.getItem("@Auth:user");
        const storagedToken = localStorage.getItem("@Auth:token")

        if(storagedUser && storagedToken)
        {
            setUser(JSON.parse(storagedUser));
            setToken(storagedToken)
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
        else{
            logout()
        }
    }, []);
        
    function logout(){
        localStorage.removeItem("@Auth:user");
        localStorage.removeItem("@Auth:token")
        delete api.defaults.headers.Authorization;
        setUser(null)
        setToken('')
    }

    return (
        <AuthContext.Provider value={{
            signed: Boolean(user),
            user,
            token,
            logout,
            setUser,
            setToken,            
        }}>
            {children}
        </AuthContext.Provider>
    )
}