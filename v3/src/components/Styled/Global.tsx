import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

body {
  --bg: #fff;
  --textColor: #000;
  --inputBg: #fff;
  --inputBgReadOnly: #f4f4f4;
  --inputTextColor: #000;
  --placeHolderBgFirst: #d5d5d5;
  --placeHolderBgSecond: #efefef;
  --btnMainBg: #000;
  --imgOpacity: 1;

  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--textColor);
}

body.dark {
  --bg: #161616;
  --textColor: #fff;
  --inputBg: #000;
  --inputBgReadOnly: #161616;
  --inputTextColor: #fff;
  --placeHolderBgFirst: #444444;
  --placeHolderBgSecond: #797979;
  --btnMainBg: #5a5a5a;
  --imgOpacity: 0.9;
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
  background: var(--inputBg);
  color: var(--inputTextColor);
}

button.btn.-black {
  padding: 7px 30px 7px 30px;
  border-radius: 0;
  color: #fff;
  background: var(--btnMainBg);
}

button.btn.-black:hover,
button.btn.-black:focus,
button.btn.-black:active {
  color: #fff; 
}

.form-control[disabled], 
.form-control[readonly], 
fieldset[disabled] .form-control {
  background-color: var(--inputBgReadOnly);
}

`;
