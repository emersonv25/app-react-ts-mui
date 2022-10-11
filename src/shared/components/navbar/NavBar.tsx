
import { AppBar, Avatar, Box, Button, Divider, Drawer, Icon, IconButton, InputAdornment, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, TextField, Toolbar, Typography, useTheme } from '@mui/material'
import { Stack } from '@mui/system';
import { MenuDrawer } from './MenuDrawer';


export const NavBar: React.FC = () => {
    const theme = useTheme();

    return (
        <>
            <Box width="100%">
                <AppBar position='static'>
                    <Toolbar>

                        <MenuDrawer/>

                        <Typography variant='h6' style={{ flexGrow: 0, justifyContent: 'start' }}>
                            MeuFlix
                        </Typography>

                        <Stack direction="row" style={{ flexGrow: 1, justifyContent: 'center' }}>
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

                        <Stack direction="row" style={{ flexGrow: 0, justifyContent: 'end' }}>
                            <TextField size='small' label='Pesquisar...' InputLabelProps={{ style: { color: 'white' } }}></TextField>
                            <IconButton color='inherit'>
                                <Icon>search</Icon>
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}