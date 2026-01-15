import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './cartSlice'
import { api } from './api'
import favoritesReducer from './favoritesSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritesReducer,
    [api.reducerPath]: api.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
