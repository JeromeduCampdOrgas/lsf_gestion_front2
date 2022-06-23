import { createSlice } from "@reduxjs/toolkit";

export const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState: null,
  reducers: {
    addSelection: (state, { payload }) => {
      state = payload;

      return state;
    },
  },
});

export const { addSelection } = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
