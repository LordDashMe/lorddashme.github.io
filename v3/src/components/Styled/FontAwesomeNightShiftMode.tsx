import { createGlobalStyle } from 'styled-components';

const FontAwesomeNightShiftMode = createGlobalStyle`

.fa-moon:before {
  content: "\\f186"; 
}

.fa-cloud-sun:before {
  content: "\\f6c4"; 
}

`;

export default FontAwesomeNightShiftMode;
