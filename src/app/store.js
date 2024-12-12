import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/categorySlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    category:categorySlice,
    user:userSlice
  },
})