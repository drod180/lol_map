import styled, { css } from 'styled-components';

import CircleImg from 'components/Img';

const Img = styled(CircleImg)`
  width: 4em;
  height: 4em;
  border: 2px solid black;
  border-radius: 50%;
  margin: 0 auto;
  opacity: 0.5;
  display: flex;

  ${(props) => props.selected && css`
    opacity: 1;
  `};
`;

export default Img;
