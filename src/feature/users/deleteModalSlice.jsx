import { createSlice } from "@reduxjs/toolkit";

export const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState: false,
  reducers: {
    displayModal: (state, action) => {
      state = true;
      return state;
    },
    hideModal: (state, action) => {
      state = false;
      return state;
    },
  },
});

export const { displayModal, hideModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;
