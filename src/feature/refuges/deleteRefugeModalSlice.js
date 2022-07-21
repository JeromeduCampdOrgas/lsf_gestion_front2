import { createSlice } from "@reduxjs/toolkit";

export const deleteRefugeModalSlice = createSlice({
  name: "deleteRefugeModal",
  initialState: false,
  reducers: {
    showRefugeDeleteModal: (state, action) => {
      state = true;
      return state;
    },
    hideRefugeDeleteModal: (state, action) => {
      state = false;
      return state;
    },
  },
});

export const { showRefugeDeleteModal, hideRefugeDeleteModal } =
  deleteRefugeModalSlice.actions;
export default deleteRefugeModalSlice.reducer;
