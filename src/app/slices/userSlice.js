import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: sessionStorage.getItem("user"),
  token:sessionStorage.getItem("token"),
  loading:false,
  error:null
}

export const useSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setUser: (state,action) => {
    const {username,jwtToken} = action.payload
    console.log("username",username)
    console.log("jwtToken ",jwtToken)
      state.username = username
      state.token = jwtToken
      sessionStorage.setItem("token",jwtToken)
      sessionStorage.setItem("user",username)
    },
    setLoading:(state,action) => {
      state.loading = action.payload
    },
    setError:(state,action) => {
      state.loading = action.payload
    },
    clearUser:(state,action) => {
      state.username = ""
      state.token=""
      sessionStorage.clear()
    }
  },
})

export const { setUser, clearUser } = useSlice.actions

export default useSlice.reducer