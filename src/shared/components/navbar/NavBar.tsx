
import { AppBar, Box, Button, Container, Divider, Icon, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../../@types/menu';
import { DarkModeButton } from '../buttons/DarkModeButton';
import UserButton from '../buttons/UserButton';
import { MenuDrawer } from './MenuDrawer';

type NavbarProps = {
    children: React.ReactNode
}
const menus: Menu[] = [
    { name: 'Inicio', path: '/' },
    { name: 'Gêneros', path: '/category' },
    { name: 'Ordem Alfabética', path: '/' },
    { name: 'Sobre', path: '/about' },
]

// latest, most views, most likes
export const NavBar: React.FC<NavbarProps> = ({ children }) => {
    const [searchDisplay, setSearchDisplay] = useState(false);
    return (
        <>
            <Box width="100%">
                <AppBar position='static'>
                    <Container maxWidth='xl'>
                        <Box>
                            <Toolbar>
                                <MenuDrawer menus={menus} />

                                <Typography variant='h6' m='auto' style={{ flexGrow: 0, justifyContent: 'start' }}>
                                    PkapaFlix
                                </Typography>

                                <Stack direction="row" style={{ flexGrow: 1, justifyContent: 'center' }} display={{ xs: 'none', md: 'flex' }}>
                                    {
                                        menus.map((menu, key) => <Button key={key} color='inherit' component={Link} to={`${menu.path}`}>{menu.name}</Button>)
                                    }
                                </Stack>

                                <Box display={{ xs: 'none', md: 'flex' }}>
                                    <TextField
                                        size='small'
                                        label='Pesquisar...'
                                        variant='standard'
                                        InputLabelProps={{ style: { padding: '0 15px' } }}
                                        InputProps={{ disableUnderline: true }}
                                        style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 25, width: '100%', padding: '0  10px' }}>

                                    </TextField>
                                    <IconButton color='inherit'>
                                        <Icon>search</Icon>
                                    </IconButton>
                                </Box>

                                {/* Exibir o Input de pesquisar em telas pequenas */}
                                <Box display={{ xs: 'flex', md: 'none' }}>
                                    <Box display={{ xs: searchDisplay ? 'none' : 'flex', md: 'none' }}>
                                        <IconButton color='inherit' onClick={() => setSearchDisplay(true)}>
                                            <Icon>search</Icon>
                                        </IconButton>
                                    </Box>
                                </Box>
                                
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <UserButton />
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <DarkModeButton />
                                </Box>
                            </Toolbar>
                        </Box>
                    </Container>
                </AppBar>
            </Box>
            {/* Input de pesquisar em telas pequenas */}
            <Box display={{ xs: 'flex', md: 'none' }} p={1}>
                <Container>
                    <Box display={{ xs: searchDisplay ? 'flex' : 'none', md: 'none' }} justifyContent='center'>
                        <TextField
                            size='small'
                            label='Pesquisar...'
                            variant='standard'
                            InputLabelProps={{ style: { padding: '0 15px' } }}
                            InputProps={{ disableUnderline: true }}
                            style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 25, width: '100%', padding: '0  10px' }}>

                        </TextField>
                        <IconButton color='inherit'>
                            <Icon>search</Icon>
                        </IconButton>
                        <IconButton color='inherit' onClick={() => setSearchDisplay(false)}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Box>
                </Container>
            </Box>
            <Box>
                {children}
            </Box>
        </>
    )
}