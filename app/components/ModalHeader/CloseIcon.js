import styled, { css} from 'styled-components';

import Img from 'components/Img';

const ChampionName = styled(Img)`
  position: absolute;
  right: 0;
  top: 0;
  height: 45px;
  display: inline-block;
  float: right;
  opacity: 0.8;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

export default ChampionName;
