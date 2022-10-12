
import { AppBar, Box, Button, Icon, IconButton, InputAdornment, TextField, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import { useState } from 'react';
import { MenuDrawer } from './MenuDrawer';

type NavbarProps = {
    children: React.ReactNode
}

export const NavBar: React.FC<NavbarProps> = ({ children }) => {
    const [searchDisplay, setSearchDisplay] = useState(false);
    return (
        <>
            <Box width="100%">
                <AppBar position='static'>
                    <Toolbar>
                        <MenuDrawer />

                        <Typography variant='h6' mr='auto' style={{ flexGrow: 0, justifyContent: 'start' }}>
                            MeuFlix
                        </Typography>

                        <Stack direction="row" style={{ flexGrow: 1, justifyContent: 'center' }} display={{ xs: 'none', md: 'flex' }}>
                            <Button color='inherit' href='/'>
                                Início
                            </Button>
                            <Button color='inherit'>
                                Lista
                            </Button>
                            <Button color='inherit'>
                                Gêneros
                            </Button>
                            <Button color='inherit' href='/about'>
                                Sobre
                            </Button>
                        </Stack>

                        <Box display={{ xs: 'none', md: 'flex' }}>
                            <TextField size='small' label='Pesquisar...' InputLabelProps={{ style: { color: 'white' } }}></TextField>
                            <IconButton color='inherit'>
                                <Icon>search</Icon>
                            </IconButton>
                        </Box>

                        {/* Input de pesquisar em telas pequenas */}
                        <Box display={{ xs: 'flex', md: 'none' }}>
                            <Box display={{ xs: searchDisplay ? 'flex' : 'none', md: 'none' }}>
                                <TextField size='small' label='Pesquisar...' InputLabelProps={{ style: { color: 'white' } }}></TextField>
                                <IconButton color='inherit'>
                                    <Icon>search</Icon>
                                </IconButton>
                                <IconButton color='inherit' onClick={() => setSearchDisplay(false)}>
                                    <Icon>close</Icon>
                                </IconButton>
                            </Box>

                            {/* habilita o input de pesquisar em telas pequenas */}
                            <Box display={{ xs: searchDisplay ? 'none' : 'flex', md: 'none' }}>
                                <IconButton color='inherit' onClick={() => setSearchDisplay(true)}>
                                    <Icon>search</Icon>
                                </IconButton>
                            </Box>
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
            <Box p={{ xs: 4, md: 8 }}>
                {children}
            </Box>
        </>
    )
}