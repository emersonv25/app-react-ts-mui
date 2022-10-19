import { Avatar, Button, Checkbox, Container, FormControlLabel, Grid, Icon, Paper, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import { Box } from "@mui/system";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export function SignUp() {

    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {authRegister} = useAuth();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        await authRegister(username, fullName, email, password);
    };
    return (
        <>
            <Container maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <Icon>lock-outlined-icon</Icon>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registrar-se
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            id="username"
                            label="Usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="fullname"
                            id="fullname"
                            label="Nome Completo"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            id="email"
                            label="E-mail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" />}
                            label="Lembrar senha"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Cadastrar
                        </Button>
                        <Button component={Link} to='/login' color='inherit' fullWidth>
                            Voltar para o Login
                        </Button>
                    </Box>
                </Box>

            </Container>
        </>
    )
}