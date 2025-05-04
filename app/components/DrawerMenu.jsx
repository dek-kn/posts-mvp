import Link from "next/link"
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export default function DrawerMenu({ open, items, onSelect, onClose }) {
    return (
        <Drawer open={open} onClose={onClose}>
            <Box sx={{ width: 250 }} role="presentation" onClick={onSelect}>
                <List>
                    {
                        items.map(
                            ({label, href, icon}, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton component={Link} href={href}>
                                        <ListItemIcon>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={label} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        )
                    }
                </List>
            </Box>
        </Drawer>
    )
}
