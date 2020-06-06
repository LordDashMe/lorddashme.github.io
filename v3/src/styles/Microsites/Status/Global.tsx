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
  background-color: #ececec;
  margin: 0;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  color: #000;
}

html, body {
  overflow-x: hidden;
  width: 100%;
}

`;

export default Global;
