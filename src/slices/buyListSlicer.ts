import type { ListItem } from "../types/types";
import { createSlice } from "@reduxjs/toolkit";
import { buyListItem } from "../data/buyListData";

type BuyListState = {
    items: ListItem[]
}

const initialState: BuyListState = {
    items: buyListItem
}

const buyListSlicer = createSlice({
    name: 'buyList',
    initialState,
    reducers: {}
})

export default buyListSlicer.reducer;