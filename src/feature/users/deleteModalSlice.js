import { createSlice } from "@reduxjs/toolkit";

export const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState: false,
  reducers: {
    showModal: (state, action) => {
      state = true;
      return state;
    },
    hideModal: (state, action) => {
      state = false;
      return state;
    },
  },
});

export const { showModal, hideModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;
