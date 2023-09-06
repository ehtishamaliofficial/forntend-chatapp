import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { FLUSH, REHYDRATE, persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import authSlice from "../features/slices/authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          "persist/FLUSH",
          "persist/REHYDRATE",
        ],
      },
    }).concat(),
});

export const Persistor = persistStore(store);
