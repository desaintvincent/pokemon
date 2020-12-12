import { Route } from 'react-router-dom'
import React from 'react'
import { useMe } from '../api/user'
import Loader from '../components/template/Loader'

const PrivateRoute = ({ children, ...props }) => {
  const { loading } = useMe()

  if (loading) {
    return <Loader />
  }

  return (
    <Route {...props}>
      {children}
    </Route>
  )
}

export default PrivateRoute
