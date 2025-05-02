import Link from "next/link"
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import AddCircleIcon from "@mui/icons-material/AddCircle"
import HomeIcon from "@mui/icons-material/Home"
import ListIcon from "@mui/icons-material/List"

export default function AppDrawer({ isOpen, toggleDrawer }) {
    return (
        <Drawer open={isOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    <ListItem key="home" disablePadding>
                        <ListItemButton component={Link} href="/">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Головна" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key="all-posts" disablePadding>
                        <ListItemButton component={Link} href="/posts">
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary="Усі пости" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key="create-post" disablePadding>
                        <ListItemButton component={Link} href="/posts/create">
                            <ListItemIcon>
                                <AddCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Створити пост" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}
