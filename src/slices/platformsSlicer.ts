import type { Platforms } from "../types/types";
import { platformsList } from "../data/platformsData";
import { createSlice } from "@reduxjs/toolkit";

type PlatformsState = {
    items: Platforms[]
}

const initialState: PlatformsState = {
    items: platformsList
}

const platformsSlicer = createSlice({
    name: 'platforms',
    initialState,
    reducers: {}
})

export default platformsSlicer.reducer;