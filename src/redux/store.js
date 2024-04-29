import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fakeReducer } from "./fake/fake.slice";
import { themeReducer } from "./theme/theme.slice";

const authPersistConfig = {
  key: "fake",
  storage,
};

const themePersistConfig = {
  key: "theme",
  storage,
};

const rootReducer = combineReducers({
  fake: persistReducer(authPersistConfig, fakeReducer),
  theme: persistReducer(themePersistConfig, themeReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
