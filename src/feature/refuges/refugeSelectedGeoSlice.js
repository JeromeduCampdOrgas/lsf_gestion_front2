import { createSlice } from "@reduxjs/toolkit";

export const refugeSelectedGeoSlice = createSlice({
  name: "refugeGeo",
  initialState: [],
  reducers: {
    addRefugeGeo: (state, { payload }) => {
      state.splice(0, 1);
      state.push(payload);
    },
    deleteRefugeGeo: (state, action) => {
      state.splice(0, 1);
    },
  },
});
export const { addRefugeGeo, deleteRefugeGeo } = refugeSelectedGeoSlice.actions;
export default refugeSelectedGeoSlice.reducer;
