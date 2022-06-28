import { createSlice } from "@reduxjs/toolkit";

export const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState: null,
  reducers: {
    addSelection: (state, { payload }) => {
      state = payload;
      return state;
    },
    deleteSelection: (state, action) => {
      state = null;
      return state;
    },
  },
});

export const { addSelection, deleteSelection } = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
