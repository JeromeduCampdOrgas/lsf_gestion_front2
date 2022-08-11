import { createSlice } from "@reduxjs/toolkit";

export const selectedStatutSlice = createSlice({
  name: "selectedStatut",
  initialState: [],
  reducers: {
    addSelectedStatut: (state, { payload }) => {
      state.push(payload);
    },
    deleteSelectedStatut: (state, action) => {
      state = state.splice(0, 1);
    },
  },
});
export const { addSelectedStatut, deleteSelectedStatut } =
  selectedStatutSlice.actions;
export default selectedStatutSlice.reducer;
