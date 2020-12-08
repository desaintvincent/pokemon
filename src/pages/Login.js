import React from 'react'
import { useMe } from '../api/user'
import Typography from '@material-ui/core/Typography'
import ROUTE from '../routing/constants'
import { Redirect } from 'react-router'
import { login } from '../auth'
import Loader from '../components/template/Loader'
import Button from '../components/ui/Button'
import {TextField} from "@material-ui/core";
import styled from "styled-components"

const getFormData = (form) => {
  return [...(new FormData(form))].reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value
  }), {})
}

const Input = styled(TextField)`
    width: 100%;
  margin-bottom: ${({theme}) => theme.spacing(2)}px;
`

const Login = () => {
  const { loggedOut, refresh, loading } = useMe()

  if (loading) {
    return <Loader />
  }

  if (!loggedOut) {
    return <Redirect to={ROUTE.HOME} />
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const data = getFormData(e.target)
    console.log('onSubmit', data)
    login()
    refresh()
  }

  return (
    <>
      <Typography variant="h4">Login</Typography>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <Input variant="outlined" name="email" label="Email" />
        <Input variant="outlined" name="password" label="Password" />
        <Button
            type="submit"
            loading={loading}
          >
          Login
        </Button>
      </form>
    </>
  )
}

export default Login
