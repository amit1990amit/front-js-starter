import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const incoming = action.payload;
      const existing = state.items.find((p) => p.id === incoming.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...incoming,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((p) => p.id !== idToRemove);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
