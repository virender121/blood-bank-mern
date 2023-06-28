import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminPrivateRoute = ({component: component,...rest}) => {

    const userLogin = useSelector((state)=>state.userLogin)
    const { loading, userInfo } = userLogin
  return (
    <Route
      {...rest}
      render={(props) =>
        !userInfo && !loading ? (
          <Redirect to='/login' />
        ) : userInfo && !userInfo.isAdmin ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default AdminPrivateRoute
