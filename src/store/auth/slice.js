import { createSlice } from "@reduxjs/toolkit";
import { REDUCERS } from "constants/reducers";

const initialState = {
  token: localStorage.getItem("token"),
  user: false,
};

const authSlice = createSlice({
  name: REDUCERS.AUTH,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
