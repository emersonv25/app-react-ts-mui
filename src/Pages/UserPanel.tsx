import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Icon, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export function UserPanel() {
    const { user, authLogout } = useAuth();
    const [edit, setEdit] = useState(false);

    return (
        <Container maxWidth="xs" component={Paper}>
            <Box
                sx={{
                    padding: 2,
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography component="h1" variant="h5">
                    Painel do Usuário
                </Typography>
                <Box component='form' noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="username"
                        id="username"
                        label="Usuário"
                        value={user?.username}
                        disabled={!edit}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="fullname"
                        id="fullname"
                        label="Nome Completo"
                        value={user?.fullName}
                        disabled={!edit}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        id="email"
                        label="E-mail"
                        type="email"
                        value={user?.email}
                        disabled={!edit}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        id="password"
                        label="Nova Senha"
                        type="password"
                        disabled={!edit}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" />}
                        label="Lembrar senha"
                    />
                    {
                        !edit &&
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => setEdit(true)}
                        >
                            Editar
                        </Button>
                    }
                    {
                        edit &&
                        <>
                            <Button
                                type="button"
                                fullWidth
                                color="success"
                                variant="contained"
                                sx={{ mt: 3, mb: 1 }}
                            >
                                Confirmar
                            </Button>
                            <Button
                                type="button"
                                fullWidth
                                color="error"
                                variant="outlined"
                                sx={{ mb: 2 }}
                                onClick={() => setEdit(false)}
                            >
                                Cancelar
                            </Button>
                        </>

                    }
                    <Button onClick={authLogout} color='inherit' fullWidth>
                        Deslogar
                    </Button>
                </Box>
            </Box>

        </Container>
    )
}