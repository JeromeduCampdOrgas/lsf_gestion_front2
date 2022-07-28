import { createSlice } from "@reduxjs/toolkit";

export const chiensListSlice = createSlice({
  name: "chiensList",
  initialState: [],
  reducers: {
    getChiensList: (state, { payload }) => {
      state.splice(0, 1);
      state.push(payload);
    },
    deleteChiensList: (state, action) => {
      state.splice(0, 1);
    },
  },
});
export const { getChiensList, deleteChiensList } = chiensListSlice.actions;
export default chiensListSlice.reducer;
