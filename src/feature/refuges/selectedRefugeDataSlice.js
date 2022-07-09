import { createSlice } from "@reduxjs/toolkit";

export const selectedRefugeDataSlice = createSlice({
  name: "selectedRefugeData",
  initialState: [],
  reducers: {
    addRefugeData: (state, { payload }) => {
      state = payload;
      return state;
    },
    deleteRefugeData: (state, action) => {
      state = state.splice(0, 1);
    },
  },
});

export const { addRefugeData, deleteRefugeData } =
  selectedRefugeDataSlice.actions;
export default selectedRefugeDataSlice.reducer;
