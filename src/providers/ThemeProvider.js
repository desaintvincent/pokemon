import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import GlobalStyle from '../components/template/GlobalStyle'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  drawerWidth: 240,
  palette: {
    primary: {
      main: '#03ccb9'
    },
    secondary: {
      main: '#4c3e72'
    }
  }
})

const ThemeProvider = ({ children }) => {
  console.log('theme', theme)
  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </MaterialThemeProvider>
  )
}

export default ThemeProvider
