import { createSlice } from "@reduxjs/toolkit";

export const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState: [1],
  reducers: {
    addSelection: (state, { payload }) => {
      console.log(payload);
      state = state.splice(0, 1);
    },
    deleteSelection: (state, action) => {
      state = state.splice(0, 1);
    },
  },
});

export const { addSelection, deleteSelection } = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
