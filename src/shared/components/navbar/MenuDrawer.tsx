import { Drawer, Icon, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

export const MenuDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <IconButton edge='start' aria-label='menu' color='inherit' onClick={() => setIsDrawerOpen(true)}>
                <Icon>menu</Icon>
            </IconButton>
            <Drawer variant='temporary' anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} >
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <Typography variant='h6'>Drawer</Typography>
                </Box>
            </Drawer>
        </>

    )
}