import styled, { css} from 'styled-components';

import Img from 'components/Img';

const ChampionName = styled(Img)`
  position: absolute;
  right: 0;
  top: 0;
  height: 45px;
  display: inline-block;
  float: right;
  opacity: 0.7;

  &:hover {
    transform: scale(1.3) rotate(180deg);
    transition: transform 250ms ease;
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

export default ChampionName;
