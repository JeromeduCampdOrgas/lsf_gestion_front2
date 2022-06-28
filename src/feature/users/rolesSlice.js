import { createSlice } from "@reduxjs/toolkit";

export const rolesSlice = createSlice({
  name: "roles",
  initialState: [],
  reducers: {
    addRoles: (state, { payload }) => {
      state.push(payload);
    },
    deleteRoles: (state, action) => {
      state = state.splice(0, 1);
    },
  },
});

export const { addRoles, deleteRoles } = rolesSlice.actions;
export default rolesSlice.reducer;
