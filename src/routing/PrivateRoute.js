import { Route } from 'react-router-dom'
import React from 'react'
import { useMe } from '../api/user'
import { Redirect } from 'react-router'
import ROUTE from './constants'
import Loader from "../components/template/Loader";

const PrivateRoute = ({ children, ...props }) => {
  const { loggedOut, loading } = useMe()

  if (loading) {
    return <Loader />
  }

  if (loggedOut) {
    return <Redirect to={ROUTE.LOGIN} />
  }
  return (
    <Route {...props}>
      {children}
    </Route>
  )
}

export default PrivateRoute
