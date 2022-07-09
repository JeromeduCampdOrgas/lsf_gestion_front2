import { createSlice } from "@reduxjs/toolkit";

export const selectedRefugeSlice = createSlice({
  name: "selectedRefuge",
  initialState: null,
  reducers: {
    addSelectedRefuge: (state, { payload }) => {
      state = payload;
      return state;
    },
    deleteSelectedRefuge: (state, action) => {
      state = null;
      return state;
    },
  },
});

export const { addSelectedRefuge, deleteSelectedRefuge } =
  selectedRefugeSlice.actions;
export default selectedRefugeSlice.reducer;
