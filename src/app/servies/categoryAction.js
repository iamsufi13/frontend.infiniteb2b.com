import axios from 'axios';
import { setTopCategory } from '../slices/categorySlice';

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1ZFTkRPUiJdLCJzdWIiOiJjb2RlYmFja3Vwc3VmaXlhbkBnbWFpbC5jb20iLCJpYXQiOjE3MzI1MjU0MzgsImV4cCI6MTczMjg4NTQzOH0.n92-M6xt9oRLdd9ss2jxlx1bFBisGu5gZY5p7cOZ42nF41fWx4_A_eM6NL6xeVoZC3oRFC2G4nBXwMYOWbcO_A'
const config = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
};

export const fetchCategories = (dispatch,callback) => async () => {

    try {
      const res = await axios.get("https://infiniteb2b.com:8443/api/category",config)
      console.log("res", res)
      console.log("config", config)
      callback(res.data.data)
      dispatch(setTopCategory(res.data.data))
    } catch (error) {
        console.log("error",error)
    }
};
export const fetchCategoriesByLetter = (letter,callback) => async () => {
    try {
      const res = await axios.get(`https://infiniteb2b.com:8443/api/category?filter=${letter}`,config)
      return callback(res.data.data)
    } catch (error) {
        console.log("error",error)
    }
};
export const searchCategories = (searchQuery,callback) => async () => {
    try {
      const res = await axios.get(`https://infiniteb2b.com:8443/api/category?name=${searchQuery}`,config)
      return callback(res.data.data)
    } catch (error) {
        console.log("error",error)
    }
};
