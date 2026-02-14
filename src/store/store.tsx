import { configureStore } from "@reduxjs/toolkit"
import hpList from "../slices/hpListSlicer"

export const store = configureStore({
    reducer: {
        hpList: hpList
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch