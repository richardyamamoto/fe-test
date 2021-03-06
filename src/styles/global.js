import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #eee;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  #root {
    max-width: 950px;
    margin: 0 auto;
    padding: 0 20px 50px;
    width: 100%;
    @media(max-width: 650px){
      padding: 0 15px 15px;
    }
  }
  button {
    cursor: pointer;
  }
`;
