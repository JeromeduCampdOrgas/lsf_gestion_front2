import { createSlice } from "@reduxjs/toolkit";

export const rolesSlice = createSlice({
  name: "roles",
  initialState: [],
  reducers: {
    addRoles: (state, { payload }) => {
      state.push(payload);
      return state;
    },
    deleteRoles: (state, action) => {
      let stateLength = state.length;
      state = state.splice(0, stateLength);
    },
  },
});

export const { addRoles, deleteRoles } = rolesSlice.actions;
export default rolesSlice.reducer;
