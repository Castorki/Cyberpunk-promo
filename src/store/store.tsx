import { configureStore } from "@reduxjs/toolkit"
import hpList from "../slices/hpListSlicer"
import platforms from "../slices/platformsSlicer"
import buyList from "../slices/buyListSlicer"

export const store = configureStore({
    reducer: {
        hpList: hpList,
        platforms: platforms,
        buyList: buyList
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch