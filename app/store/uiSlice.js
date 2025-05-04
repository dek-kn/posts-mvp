import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isDrawerOpen: false,
    },
    reducers: {
        setDrawerOpen(state, action) {
            state.isDrawerOpen = action.payload.isOpen
        },
    },
})

export const { setDrawerOpen } = uiSlice.actions

export default uiSlice.reducer
