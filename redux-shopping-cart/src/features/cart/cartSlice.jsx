import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
};

export const cartSlice = createSlice({
  name: 'cart',  
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    }
  },
  
});

export const { addToCart  } = cartSlice.actions;


export default cartSlice.reducer;
