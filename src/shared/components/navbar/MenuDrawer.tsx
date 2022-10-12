import { Button, Divider, Drawer, Icon, IconButton, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Menu } from "../../@types/menu"

type MenuDrawerProps = {
    menus: Menu[]
}
export const MenuDrawer = (props: MenuDrawerProps) => {
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
                    <Box p={2} role='presentation'>
                        <Stack>
                            {
                                props.menus.map((menu, key) => <Button key={key}  color='inherit' href={`${menu.name}`}>{menu.name}</Button>)
                            }
                        </Stack>
                    </Box>
                </Drawer>
            </Box>

        </>

    )
}