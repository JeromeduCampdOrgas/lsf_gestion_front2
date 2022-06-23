import { createSlice } from "@reduxjs/toolkit";

export const usersListSlice = createSlice({
  name: "usersList",
  initialState: ["coucou"],
  reducers: {
    getUsersList: (state, { payload }) => {
      state.splice(0, 1);
      state.push(payload);
    },
    deleteUsersList: (state, action) => {
      state.splice(0, 1);
    },
  },
});
export const { getUsersList, deleteUsersList } = usersListSlice.actions;
export default usersListSlice.reducer;
