import { createSlice } from "@reduxjs/toolkit";

export const statutsListSlice = createSlice({
  name: "statutsList",
  initialState: [],
  reducers: {
    getStatutsList: (state, { payload }) => {
      state.splice(0, 1);
      state.push(payload);
    },
    deleteStatutsList: (state, action) => {
      let stateLength = state.length;
      state.splice(0, stateLength);
    },
  },
});
export const { getStatutsList, deleteStatutsList } = statutsListSlice.actions;
export default statutsListSlice.reducer;
