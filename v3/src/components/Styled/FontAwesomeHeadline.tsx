import { createGlobalStyle } from 'styled-components';

const FontAwesomeHeadline = createGlobalStyle`

.fa-times:before {
  content: "\\f00d"
}

`;

export default FontAwesomeHeadline;
