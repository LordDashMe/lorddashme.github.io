import { createGlobalStyle } from 'styled-components';

const FontAwesomeNightShiftMode = createGlobalStyle`

.fa-moon:before {
  content: "\\f186"; 
}

.fa-sun:before {
  content: "\\f185"; 
}

`;

export default FontAwesomeNightShiftMode;
