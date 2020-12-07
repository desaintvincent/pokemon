import { Route } from 'react-router-dom'
import React from 'react'
import { useMe } from '../api/user'
import { Redirect } from 'react-router'
import ROUTE from './constants'

const PrivateRoute = ({ children, ...props }) => {
  const { loggedOut } = useMe()
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
