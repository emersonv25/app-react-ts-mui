import { createContext, useContext, useEffect, useState } from "react";
import { User, UserLogin } from "../@types/user";
import api from "../services/api";

interface IAuthProviderProps {
    children: React.ReactNode
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    login(user: object) : Promise<void>;
    logout(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        async function loadingStoreData(){
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
        };
        loadingStoreData();
    }, []);


    async function login(userData: UserLogin) {
        const response = await api.post("/auth/login", userData)

        if(response.data.error)
        {
            alert(response.data.error)
        }
        else{
            setUser(response.data.user)
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`
            localStorage.setItem("@Auth:user", JSON.stringify(response.data.user))
            localStorage.setItem("@Auth:token", response.data.token)
        }
    }
    function logout(){
        localStorage.removeItem("@Auth:user");
        localStorage.removeItem("@Auth:token")
        delete api.defaults.headers.Authorization;
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            signed: Boolean(user),
            user,
            login,
            logout,            
        }}>
            {children}
        </AuthContext.Provider>
    )
}