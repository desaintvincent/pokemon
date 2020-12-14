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
import { useSnackbar } from 'notistack'

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

function Login () {
  const { loading } = useSubmit()
  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = (e) => {
    e.preventDefault()
    const data = getFormData(e.target)
    console.log(data)
    enqueueSnackbar('I love hooks', {variant: 'success'})
  }

  return (
    <Container container component="main">
      <Left item xs={false} sm={false} md={6}>
        <Img src={loginImage}/>
      </Left>
      <Right item xs={12} md={6} component={Paper} square>
        <Typography component="h1" variant="h3">
          Login
        </Typography>
        <form noValidate onSubmit={onSubmit}>
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
              loading={loading}
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
