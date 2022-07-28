import { createSlice } from "@reduxjs/toolkit";

export const selectedChienSlice = createSlice({
  name: "selectedChien",
  initialState: null,
  reducers: {
    addSelectedChien: (state, { payload }) => {
      state = payload;
      return state;
    },
    deleteSelectedChien: (state, action) => {
      state = null;
      return state;
    },
  },
});

export const { addSelectedChien, deleteSelectedChien } =
  selectedChienSlice.actions;
export default selectedChienSlice.reducer;
