import styled from 'styled-components';

import ConeImg from 'components/Img';

const Img = styled(ConeImg)`
font-size: 6em; /* This controls the size. */
display: inline-block;
width: 0.4em;
height: 0.4em;
border: 0.02em solid red;
position: relative;
border-radius: 0.35em;

&:before {
  content: "";
  display: inline-block;
  position: absolute;
  right: -0.25em;
  bottom: -0.1em;
  border-width: 0;
  background: red;
  width: 0.35em;
  height: 0.08em;
  -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
       -o-transform: rotate(45deg);
}
`;

export default Img;
