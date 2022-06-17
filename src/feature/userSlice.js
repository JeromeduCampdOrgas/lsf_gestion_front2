import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addConnexion: (state, { payload }) => {
      state.push(payload);
    },
    deleteConnexion: (state, action) => {
      state = state.splice(0, 1);
    },
  },
});

export const { addConnexion, deleteConnexion } = userSlice.actions;
export default userSlice.reducer;
