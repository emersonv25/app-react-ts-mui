import { Avatar, Button, Checkbox, Container, FormControlLabel, Grid, Icon, Paper, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import { Box } from "@mui/system";

export function SignUp() {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
        });
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
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            id="email"
                            label="E-mail"
                            type="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
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