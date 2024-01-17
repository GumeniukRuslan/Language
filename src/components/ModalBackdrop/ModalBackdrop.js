import styled from 'styled-components';


export const Backdrop = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 900;
  width: 100vw;
  height: 100vh;
  background: rgba(63,61,61, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

