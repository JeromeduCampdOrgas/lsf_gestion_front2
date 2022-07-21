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
/******** Users */
import userReducer from "../feature/users/userSlice";
import usersListReducer from "../feature/users/usersListSlice";
import selectedUserReducer from "../feature/users/selectedUserSlice";
import selectedUserDataReducer from "../feature/users/selectedUserDataSlice";
import deleteModalReducer from "../feature/users/deleteModalSlice";
import rolesReducer from "../feature/users/rolesSlice";

/******** Refuges ***/
import refugesListReducer from "../feature/refuges/refugesListSlice";
import selectedRefugeReducer from "../feature/refuges/selectedRefugeSlice";
import selectedRefugeDataReducer from "../feature/refuges/selectedRefugeDataSlice";
import refugeSelectedGeoReducer from "../feature/refuges/refugeSelectedGeoSlice";
import deleteRefugeModalReducer from "../feature/refuges/deleteRefugeModalSlice";

const persistConfig = {
  key: "user",
  storage,
};

const reducers = combineReducers({
  /*** users */
  user: userReducer,
  usersList: usersListReducer,
  selectedUser: selectedUserReducer,
  selectedUserData: selectedUserDataReducer,
  roles: rolesReducer,
  deleteModal: deleteModalReducer,
  /*** refuges */
  refugesList: refugesListReducer,
  selectedRefuge: selectedRefugeReducer,
  selectedRefugeData: selectedRefugeDataReducer,
  refugeSelectedGeo: refugeSelectedGeoReducer,
  deleteRefugeModal: deleteRefugeModalReducer,
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
