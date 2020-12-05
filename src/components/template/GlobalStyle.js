import { createGlobalStyle } from 'styled-components'

import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

createMuiTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: '#f44336'
    }
  }
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
  
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

export default GlobalStyle
