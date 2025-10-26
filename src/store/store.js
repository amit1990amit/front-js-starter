import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    // add more feature slices here
  },
  // middleware/thunk is included by default in RTK, so no need to add redux-thunk manually
});

export default store;
