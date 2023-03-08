import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { CookieStorage } from "redux-persist-cookie-storage";
import userDetailReducer from "./features/user/userDetail";

const persistConfig = {
  key: "root",
  storage: new CookieStorage({
    expiration: {
      // Optional - the cookie will expire after 1 hour by default
      default: 60 * 60 * 1000,
    },
    serialize: (data) => JSON.stringify(data),
    deserialize: (data) => JSON.parse(data),
  }),
  whitelist: ["user"], // Only persist the 'user' key
};
const persistedReducer = persistReducer(persistConfig, userDetailReducer);

const store = configureStore({
  reducer: {
    userDetail: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
