import { createSlice } from "@reduxjs/toolkit";

export const selectedUserDataSlice = createSlice({
  name: "selectedUserData",
  initialState: [],
  reducers: {
    addUserData: (state, { payload }) => {
      state = payload;
      return state;
    },
    deleteUserData: (state, action) => {
      state = state.splice(0, 1);
    },
  },
});

export const { addUserData, deleteUserData } = selectedUserDataSlice.actions;
export default selectedUserDataSlice.reducer;
