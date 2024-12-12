import React from 'react'
import { useSelector } from 'react-redux'
import Login from "../pages/Login"
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
const token = useSelector(state=>state.user.token)
  return (
    <div>{token ? <Outlet/>: <Login/> }</div>
  )
}

export default ProtectedRoute