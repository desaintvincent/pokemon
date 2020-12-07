import React from 'react'
import { useMe } from '../api/user'
import Typography from '@material-ui/core/Typography'
import ROUTE from '../routing/constants'
import { Redirect } from 'react-router'
import { login } from '../auth'
import Loader from '../components/template/Loader'
import Button from '../components/ui/Button'

const Login = () => {
  const { loggedOut, refresh, loading } = useMe()

  if (loading) {
    return <Loader />
  }

  if (!loggedOut) {
    return <Redirect to={ROUTE.HOME} />
  }

  const onLogin = () => {
    login()
    refresh()
  }

  return (
    <>
      <Typography variant="h4">Login</Typography>
      <Typography paragraph>
        <Button
          loading={loading}
          onClick={onLogin}
        >Login To Continue</Button>
      </Typography>
    </>
  )
}

export default Login
