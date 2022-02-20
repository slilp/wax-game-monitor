import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface WaxAccountState {
  wallet: string;
  pubKeys: string[];
}

// Define the initial state using that type
const initialState: WaxAccountState = {
  wallet: "",
  pubKeys: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<WaxAccountState>) => {
      state.wallet = action.payload.wallet;
      state.pubKeys = action.payload.pubKeys;
    },
    logout: (state) => {
      state.wallet = initialState.wallet;
      state.pubKeys = initialState.pubKeys;
    },
  },
});

export const { login, logout } = accountSlice.actions;

export const waxAccountSelector = (state: RootState) => state.account;

export default accountSlice.reducer;
