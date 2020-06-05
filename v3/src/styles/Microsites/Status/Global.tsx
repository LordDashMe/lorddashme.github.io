import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

* {
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:after, :before {
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background-color: #fafafa;
  margin: 0;
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000;
}

`;

export default Global;
