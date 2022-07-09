import { createSlice } from "@reduxjs/toolkit";

export const refugesListSlice = createSlice({
  name: "refugesList",
  initialState: [],
  reducers: {
    getRefugesList: (state, { payload }) => {
      state.splice(0, 1);
      state.push(payload);
    },
    deleteRefugesList: (state, action) => {
      state.splice(0, 1);
    },
  },
});
export const { getRefugesList, deleteRefugesList } = refugesListSlice.actions;
export default refugesListSlice.reducer;
