import { configureStore, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addConnexion: (state, action) => {
      //{ type: "ADD_USER", payload: user}
      const newUser = {
        user: action.payload,
      };
      state.push(newUser);
    },
    deleteConnexion: (state, action) => {
      //{ type : "todo/deleteTask", payload : 20 }
      state = state.filter((u) => u.id !== action.payload); //tu ne gardes que les tâches dont l'id est différent du payload
    },
  },
});
export const { addConnexion, deleteConnexion } = userSlice.actions;
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
