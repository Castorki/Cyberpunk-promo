import { createSlice } from "@reduxjs/toolkit";
import type { HpListItem } from "../types/types";
import { hpList } from "../data/hpListData";

type HpListState = {
    items: HpListItem[]
}

const initialState: HpListState = {
    items: hpList
}

const hpListSlicer = createSlice(
    {
        name: 'hpList',
        initialState,
        reducers: {}
    }
)

export default hpListSlicer.reducer;