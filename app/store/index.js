import { configureStore } from "@reduxjs/toolkit"

import uiReducer from "@/app/store/uiSlice"

const store = configureStore({
    reducer: {
        ui: uiReducer,
    }
})

export default store
