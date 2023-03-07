import { createSlice } from "@reduxjs/toolkit";

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    activeStatus: false,
  },
  reducers: {
    setUserDetail: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.activeStatus = action.payload.activeStatus;
    },
    getFullUserDetail: (state) => {
      return state;
    },
    getUserEmail: (state) => {
      return state.email;
    },
  },
});

export const { setUserDetail, getFullUserDetail, getUserEmail } =
  userDetailSlice.actions;

export default userDetailSlice.reducer;
