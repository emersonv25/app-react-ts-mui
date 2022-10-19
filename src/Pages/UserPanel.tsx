import { useAuthContext } from "../contexts/AuthContext"

export function UserPanel() {
    const { user } = useAuthContext();
    return (
        <div>
            <h1>Seja bem vindo !</h1>
            <div>
                username: {user?.username}
            </div>
            <div>
                fullName: {user?.fullName}
            </div>
            <div>
                fullName: {user?.email}
            </div>
            
        </div>
    )
}