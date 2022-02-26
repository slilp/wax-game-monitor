import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface WaxState {
  waxToUsd: number;
  waxToThb: number;
  tokens: TokenPrice[];
}

interface TokenPrice {
  symbol: string;
  price: number;
}

// Define the initial state using that type
const initialState: WaxState = {
  waxToUsd: 0,
  waxToThb: 0,
  tokens: [],
};

export const waxSlice = createSlice({
  name: "wax",
  initialState,
  reducers: {
    storePriceData: (state, action: PayloadAction<WaxState>) => {
      state.waxToUsd = action.payload.waxToUsd;
      state.tokens = action.payload.tokens;
      state.waxToThb = action.payload.waxToThb;
    },
  },
});

export const { storePriceData } = waxSlice.actions;

export const waxSelector = (state: RootState) => state.wax;

export default waxSlice.reducer;
