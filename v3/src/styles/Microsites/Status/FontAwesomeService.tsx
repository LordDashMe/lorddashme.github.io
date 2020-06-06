import { createGlobalStyle } from 'styled-components';

const FontAwesomeService = createGlobalStyle`

.fa-check:before {
  content: "\\f00c"; 
}

.fa-times:before {
  content: "\\f00d"; 
}

`;

export default FontAwesomeService;
