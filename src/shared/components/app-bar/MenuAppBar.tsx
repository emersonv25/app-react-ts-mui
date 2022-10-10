
import { AppBar, Avatar, Box, Button, Divider, Icon, IconButton, InputAdornment, InputBase, List, ListItem, ListItemButton, ListItemText, TextField, Toolbar, Typography, useTheme } from '@mui/material'
import { pink } from '@mui/material/colors'
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Stack } from '@mui/system';


export const MenuAppBar: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <Box width="100%">
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton edge='start' aria-label='menu'>
                            <Icon>menu</Icon>
                        </IconButton>

                        <Typography variant='h6' style={{ flexGrow: 1 }}>
                            MeuFlix
                        </Typography>

                        <Stack direction="row" style={{ flexGrow: 1}}>
                            <Button color='inherit'>
                                Início
                            </Button>
                            <Button color='inherit'>
                                Lista
                            </Button>
                            <Button color='inherit'>
                                Gêneros
                            </Button>
                        </Stack>

                        <Stack direction="row" style={{ flexGrow: 0}}>
                            <TextField size='small' label='Pesquisar...' InputLabelProps={{style : {color : 'white'} }}>

                            </TextField>
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