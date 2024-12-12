import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: [],
  loading:false,
  error:null
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setTopCategory: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.category = action.payload
    },
    setLoading:(state,action) => {
      state.loading = action.payload
    },
    setError:(state,action) => {
      state.loading = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTopCategory } = categorySlice.actions

export default categorySlice.reducer