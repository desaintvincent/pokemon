import { Redirect, Route } from 'react-router-dom'
import React from 'react'
import Loader from '../components/template/Loader'
import styled from 'styled-components'
import ROUTE from './constants'
import { useAuth } from '../providers/AuthProvider'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const PrivateRoute = ({ children, ...props }) => {
  const { loading, logged } = useAuth()

  if (loading) {
    return (
      <LoadingContainer>
        <Loader />
      </LoadingContainer>
    )
  }

  if (!logged) {
    return <Redirect to={ROUTE.LOGIN} />
  }

  return (
    <Route {...props}>
      {children}
    </Route>
  )
}

export default PrivateRoute
