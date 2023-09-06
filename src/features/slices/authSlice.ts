import { createSlice } from "@reduxjs/toolkit";

interface State {
  token: string;
  isAuthenticated: boolean;
  user: User | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

const initialState: State = {
  token: "",
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLoginIn(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = "";
    },
  },
});

export const { isLoginIn, logout } = authSlice.actions;
export default authSlice;
