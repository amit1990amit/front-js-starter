import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsersRequest } from './api';

// Thunk: async action to fetch users
// dispatch(fetchUsers()) will trigger pending -> fulfilled/rejected automatically
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await fetchUsersRequest();
      // response.data is the array of users
      return response.data;
    } catch (err) {
      // thunkAPI.rejectWithValue lets us send a custom error payload
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Slice: state + reducers
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],       // array of users
    loading: false, // 'idle' | true while fetching
    error: null,    // error message if request failed
  },
  reducers: {
    // You can still add normal sync reducers here
    clearUsers(state) {
      state.list = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchUsers pending
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // fetchUsers success
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      // fetchUsers error
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load users';
      });
  },
});

export const { clearUsers } = usersSlice.actions;

// This is what gets plugged into store.js
export default usersSlice.reducer;
