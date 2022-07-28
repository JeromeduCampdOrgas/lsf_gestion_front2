import { createSlice } from "@reduxjs/toolkit";

export const selectedChienDataSlice = createSlice({
  name: "selectedChienData",
  initialState: [],
  reducers: {
    addChienData: (state, { payload }) => {
      state = payload;
      return state;
    },
    deleteChienData: (state, action) => {
      state = state.splice(0, 1);
    },
  },
});

export const { addChienData, deleteChienData } = selectedChienDataSlice.actions;
export default selectedChienDataSlice.reducer;
