import { Avatar, Button, Checkbox, Container, FormControlLabel, Grid, Icon, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export function SignIn() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { signed, authLogin } = useAuth()

    const handleLogin = async (event: any) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        await authLogin(username, password);

    };

    if (signed) {
        return <Navigate to='/User' />
    }
    else {
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
                        <Typography component="h1" variant="h5">Entrar</Typography>
                        <Box component='form' onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="username"
                                id="username"
                                label="Usuário"
                                autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                                Login
                            </Button>
                            <Grid container>
                                <Grid item md={6}>
                                    <Button component={Link} to="/forgot" variant="text" color='inherit'>
                                        Esqueceu a senha?
                                    </Button>
                                </Grid>
                                <Grid item md={6}>
                                    <Button component={Link} to="/register" variant="text" color='inherit'>
                                        {"Não tem uma conta? cadastre-se"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Container>
            </>
        )
    }
}