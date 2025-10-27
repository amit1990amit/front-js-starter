import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    cart: cartReducer,
  },
});

export default store;
