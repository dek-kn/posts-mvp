"use client"

import { useDispatch, useSelector } from "react-redux"

import { setDrawerOpen } from "@/app/store/uiSlice"
import drawerItems from "./items"
import DrawerMenu from "@/app/components/DrawerMenu"

export default function AppDrawerMenu() {
    const closeDrawer = () => dispatch(
        setDrawerOpen({
            isOpen: false,
        })
    )

    const isDrawerOpen = useSelector(state => state.ui.isDrawerOpen)
    const dispatch = useDispatch()

    return (
        <DrawerMenu
            open={isDrawerOpen}
            items={drawerItems}
            onSelect={closeDrawer}
            onClose={closeDrawer}
        />
    )
}
