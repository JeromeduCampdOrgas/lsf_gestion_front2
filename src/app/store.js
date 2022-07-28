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
/******** Chiens ***/
import chiensListReducer from "../feature/chiens/chiensListSlice";
import selectedChienReducer from "../feature/chiens/selectedChienSlice";
import selectedChienDataReducer from "../feature/chiens/selectedChienDataSlice";
import deleteChienModalReducer from "../feature/chiens/deleteChienModalSlice";

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
  /*** chiens */
  chiensList: chiensListReducer,
  selectedChien: selectedChienReducer,
  selectedChienData: selectedChienDataReducer,
  deleteChienModal: deleteChienModalReducer,
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
