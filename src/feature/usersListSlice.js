import { createSlice } from "@reduxjs/toolkit";

export const usersListSlice = createSlice({
  name: "usersList",
  initialState: [],
  reducers: {
    getUsersList: (state, { payload }) => {
      state.push(payload);
    },
  },
});
export const { getUsersList } = usersListSlice.actions;
export default usersListSlice.reducer;
