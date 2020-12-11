import { createGlobalStyle } from 'styled-components'

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
