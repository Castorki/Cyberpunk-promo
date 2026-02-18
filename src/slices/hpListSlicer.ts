import { createSlice } from "@reduxjs/toolkit";
import type { ListItem } from "../types/types";
import { hpList } from "../data/hpListData";

type HpListState = {
    items: ListItem[]
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