import { Icon, IconButton } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";

export function LogoutButton() {
    const { logout } = useAuthContext();
    return (
        <>
            <IconButton onClick={logout} color='inherit'>
                <Icon>logout</Icon>
            </IconButton>
        </>
    )
}