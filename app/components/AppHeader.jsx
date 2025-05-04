"use client"

import { useDispatch } from "react-redux"
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"

import { setDrawerOpen } from "../store/uiSlice"

export default function AppHeader() {
    const openDrawer = () => dispatch(
        setDrawerOpen({
            isOpen: true,
        })
    )

    const dispatch = useDispatch()

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
                        onClick={openDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DOiT MVP
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
