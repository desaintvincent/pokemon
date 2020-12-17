import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '../components/ui/Button'
import loginImage from '../assets/img/login.svg'
import useSubmit from '../api/useSubmit'
import { login } from '../api/auth'
import ROUTE from '../routing/constants'
import { useHistory } from 'react-router'

const Container = styled(Grid)`
  height: 100vh;
`

const breakpoint = (size, css) => props => `${props.theme.breakpoints.up(size)} {
      ${css}
    }
  `

const getFormData = (form) => {
  return [...(new FormData(form))].reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value
  }), {})
}

const Left = styled(Grid)`
  display: none;
  ${breakpoint('md', `
      display: flex;
      justify-content: center;
      align-items: center;
  `)}
`

const Img = styled.img`
  width: 100%;
  transform: translate(20%);
`

const Right = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

const ForgotPassword = styled.div`
  text-align: right;
`

const useLogin = () => {
  const { submitting, submit } = useSubmit(login)
  const history = useHistory()

  const onLoginSubmit = (e) => {
    e.preventDefault()
    const data = getFormData(e.target)
    submit(data).then(({data}) => {
      if (!data) {
        return
      }
      const { accessToken, refreshToken } = data
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      history.push(ROUTE.HOME)
      console.log("data", data)
    })
  }

  return { submitting, submit: onLoginSubmit }
}

function Login () {
  const { submitting, submit } = useLogin()

  return (
    <Container container component="main">
      <Left item xs={false} sm={false} md={6}>
        <Img src={loginImage}/>
      </Left>
      <Right item xs={12} md={6} component={Paper} square>
        <Typography component="h1" variant="h3">
          Login
        </Typography>
        <form noValidate onSubmit={submit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <ForgotPassword>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </ForgotPassword>
          <Box mt={5}>
            <Button
              loading={submitting}
              type="submit"
            >
              Login
            </Button>
          </Box>
        </form>
      </Right>
    </Container>
  )
}

export default Login
