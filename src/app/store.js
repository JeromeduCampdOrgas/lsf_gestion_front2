import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import userReducer from "../feature/users/userSlice";
import usersListReducer from "../feature/users/usersListSlice";
import selectedUserReducer from "../feature/users/selectedUserSlice";
import selectedUserDataReducer from "../feature/users/selectedUserDataSlice";

import rolesReducer from "../feature/users/rolesSlice";

const persistConfig = {
  key: "user",
  storage,
};

const reducers = combineReducers({
  user: userReducer,
  usersList: usersListReducer,
  selectedUser: selectedUserReducer,
  selectedUserData: selectedUserDataReducer,
  roles: rolesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
