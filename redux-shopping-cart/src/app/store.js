import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productsSlice.jsx'
import { productsApi } from '../features/products/productsAPI.jsx';
import cartReducer from '../features/cart/cartSlice.jsx'
import { cartApi } from '../features/cart/cartApi.jsx'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),

});
