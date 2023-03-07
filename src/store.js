import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "./features/user/userDetail";
export default configureStore({
  reducer: {
    userDetail: userDetailReducer,
  },
});
