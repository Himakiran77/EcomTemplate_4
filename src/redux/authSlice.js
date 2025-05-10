// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isLoggedIn: false,
//     user: null
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.user = null;
//     }
//   }
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state) => {
//       state.isLoggedIn = true;
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;

// export default authSlice.reducer;


// src/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userId: null, // Add userId to store
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload; // Set userId during login
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null; // Clear userId on logout
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;