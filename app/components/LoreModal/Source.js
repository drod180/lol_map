import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Source = styled.a`
  display: inline-block;
  font-size: 12px;
  margin: 0 auto;
  padding: 25px 25px 25px 5px;
  color: black;
`;

const SourceP = styled.p`
  display: inline-block;
  font-size: 14px;
  margin: 0 auto;
  padding: 25px 5px 25px 25px;
`;

function SourceText(props) {
  return (
    <span>
      <SourceP>{'Source: '}</SourceP>
      <Source href={props.source} target="_blank">{props.source}</Source>
    </span>
  );
}

SourceText.propTypes = {
  source: PropTypes.string,
};

export default SourceText;
