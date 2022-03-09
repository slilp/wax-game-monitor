import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface AssetInfoState {
  id: string;
  name: string;
  image: string;
  profit: {
    wax: number;
    thb: number;
  };
}

// Define the initial state using that type
const initialState: AssetInfoState[] = [];

export const assetSlice = createSlice({
  name: "asset",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<AssetInfoState>) => {
      const checkExist = state.find(
        (i: AssetInfoState) => i.id === action.payload.id
      );
      if (checkExist) {
        const deleteExist = state.filter(
          (i: AssetInfoState) => i.id !== action.payload.id
        );
        return [...deleteExist, action.payload];
      } else {
        return [...state, action.payload];
      }
    },
  },
});

export const { add } = assetSlice.actions;

export const assetSelector = (state: RootState) => state.asset;

export default assetSlice.reducer;
