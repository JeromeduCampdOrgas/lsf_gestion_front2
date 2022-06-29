import { createSlice } from "@reduxjs/toolkit";

export const selectedPageSlice = createSlice({
  name: "page",
  initialState: [],
  reducers: {
    addPage: (state, { payload }) => {
      state.push(payload);
    },
    deletePage: (state, action) => {
      state = state.splice(0, 1);
    },
  },
});
export const { addPage, deletePage } = selectedPageSlice.actions;
export default selectedPageSlice.reducer;
