"use client"

import { useState } from "react"
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"

import AppDrawer from "@/app/components/AppDrawer"

export default function AppHeader() {
    const [isAppDrawerOpen, setAppDrawerOpen] = useState(false)

    const toggleDrawer = newOpen => () => {
        setAppDrawerOpen(newOpen)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={ toggleDrawer(true) }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DOiT MVP
                    </Typography>
                </Toolbar>
            </AppBar>
            <AppDrawer isOpen={isAppDrawerOpen} toggleDrawer={toggleDrawer} />
        </Box>
    )
}
