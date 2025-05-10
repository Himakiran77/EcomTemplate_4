import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice'
import cartReducer from './cartSlice'
import ordersReducer from './orderSlice'
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer,
  },
});