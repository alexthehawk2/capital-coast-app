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
    setUserActive: (state) => {
      state.activeStatus = true;
    },
  },
});

export const { setUserDetail, setUserActive } = userDetailSlice.actions;

export default userDetailSlice.reducer;
