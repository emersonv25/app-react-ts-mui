import { Box, Container, Paper } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext"

export function UserPanel() {
    const { user } = useAuthContext();
    return (
        <Container component={Box} p={5}>
            <Box
                component={Paper}
                display='flex'
                alignItems='center'
                flexDirection='column'

            >
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

            </Box>
        </Container>

    )
}