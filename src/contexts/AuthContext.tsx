import axios from "axios";
import { createContext, useContext, useState } from "react";
import { User } from "../@types/user";
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
      
    function logout(){
        localStorage.removeItem("access_token");
        localStorage.removeItem("user")
        delete axios.defaults.headers.Authorization;
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