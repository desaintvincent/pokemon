import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import GlobalStyle from '../components/template/GlobalStyle'
import CssBaseline from '@material-ui/core/CssBaseline'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        drawer: {
          closed: 60,
          open: 240
        },
        white: '#eee',
        black: '#333',
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#03ccb9'
          },
          secondary: {
            main: '#f50057'
          }
        }
      }),
    [prefersDarkMode]
  )
  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline/>
        <GlobalStyle/>
        {children}
      </StyledThemeProvider>
    </MaterialThemeProvider>
  )
}

export default ThemeProvider
