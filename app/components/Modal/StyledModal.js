import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 10%;
  left: 10%;
  height: 80%;
  width: 80%;
  z-index: 20;
  background: ${(props) => (props.backgroundColor || 'rgba(255,255,255,1)')};
`;

export default StyledModal;
