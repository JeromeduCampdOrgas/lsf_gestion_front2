import { createSlice } from "@reduxjs/toolkit";

export const deleteChienModalSlice = createSlice({
  name: "deleteChienModal",
  initialState: false,
  reducers: {
    showChienDeleteModal: (state, action) => {
      state = true;
      return state;
    },
    hideChienDeleteModal: (state, action) => {
      state = false;
      return state;
    },
  },
});

export const { showChienDeleteModal, hideChienDeleteModal } =
  deleteChienModalSlice.actions;
export default deleteChienModalSlice.reducer;
