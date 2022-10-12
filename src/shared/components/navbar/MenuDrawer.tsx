import { Button, Divider, Drawer, Icon, IconButton, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

export const MenuDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <Box display={{ xs: 'flex', md: 'none' }}>
                <IconButton edge='start' aria-label='menu' color='inherit' onClick={() => setIsDrawerOpen(true)}>
                    <Icon>menu</Icon>
                </IconButton>
            </Box>
            <Box display={{ xs: 'none', md: 'flex' }}>
                <Drawer variant='temporary' anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                    <Box p={2} width='250px' textAlign='center' role='presentation'>
                        <Typography variant='h6'>MeuFlix</Typography>
                    </Box>
                    <Divider></Divider>
                    <Box p={2}  role='presentation'>
                        <Stack>
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
                    </Box>
                </Drawer>
            </Box>

        </>

    )
}