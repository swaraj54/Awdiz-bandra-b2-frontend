import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    lastVisitedUrl: null,
  },
  reducers: {
    login: (state, data) => {
      console.log(data.payload, "payload");
      state.user = data.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setLastVisitedUrl: (state, action) => {
      state.lastVisitedUrl = action.payload;
    },
    clearLastVisitedUrl: (state) => {
      state.lastVisitedUrl = null;
    },
  },
});

export const { login, logout, setLastVisitedUrl } = authSlice.actions;

export default authSlice.reducer;
