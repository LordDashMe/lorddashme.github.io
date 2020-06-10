import styled from 'styled-components';

const ImageBackgroundScene = styled.img`

right: ${props => (typeof props.theme.right !== 'undefined' ? props.theme.right : 'unset')};
left: ${props => (typeof props.theme.left !== 'undefined' ? props.theme.left : 'unset')};
top: ${props => (typeof props.theme.top !== 'undefined' ? props.theme.top : 'unset')};
bottom: ${props => (typeof props.theme.bottom !== 'undefined' ? props.theme.bottom : 'unset')};

height: 38em;

@media (max-width: 767px) {
  height: 19em;
}

z-index: -1;
max-width: none;
position: fixed;
display: block;

`;

export default ImageBackgroundScene;
