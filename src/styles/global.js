import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #c9c9c9;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`
