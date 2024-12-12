import axios from 'axios';
import { setUser } from '../slices/userSlice';
// const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1ZFTkRPUiJdLCJzdWIiOiJ0ZXN0QDEyMy5jb20iLCJpYXQiOjE3MzA5NjEyODAsImV4cCI6MTczMTMyMTI4MH0.bcze5N1hRj0xKaTPvKAzQxnu2RKu9RzOJLkzHB0YRjG6_CnX6KknjzJRIG_kxVxkYCdEk36AIbR5fB8N62HHaA'
const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  }
};

export const loginUser = (body,dispatch,callback) => async () => {
    try {
      // const res = await axios.post("https://infiniteb2b.com:8443/api/user/login",body,config)
      const res = await axios.post("https://infiniteb2b.com:8443/api/user/login",body,config)
      callback(res.data.data)
      dispatch(setUser(res.data.data))
    } catch (error) {
        console.log("error",error?.response?.data?.message)
        sessionStorage.clear()
        callback(error?.response?.data?.message ?? "Invalid Credentials","error")
    }
};
export const signupUser = (body,callback) => async () => {
    try {
      const res = await axios.post("https://infiniteb2b.com:8443/api/user/register",body,config)
      callback(res)
    } catch (error) {
        console.log("error",error?.response?.data?.message)
        callback(error?.response?.data?.message ?? "Something went wrong...","error")
    }
};
