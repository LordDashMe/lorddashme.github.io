import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

body {
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000;
}

code,
p, 
small,
label {
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000;
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

export default Global;
