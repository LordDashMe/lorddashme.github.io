import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

body {
  --bg: #fff;
  --textColor: #000;

  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--textColor);
}

body.dark {
  --bg: #161616;
  --textColor: #fff;
}

code,
p, 
small,
label {
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: var(--textColor);
}

h1, 
h2, 
h3, 
h4, 
h5, 
h6 {
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.row {
  margin-left: unset;
  margin-right: unset;
}

.form-control {
  border-radius: 0;
  color: #000;
}

button.btn.-black {
  padding: 7px 30px 7px 30px;
  border-radius: 0;
  color: #fff;
  background: #000;
}

button.btn.-black:hover,
button.btn.-black:focus,
button.btn.-black:active {
  color: #fff; 
}

.form-control[disabled], 
.form-control[readonly], 
fieldset[disabled] .form-control {
  background-color: #f4f4f4;
}

`;
