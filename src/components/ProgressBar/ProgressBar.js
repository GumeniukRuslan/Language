import styled from 'styled-components';


export const StyledProgressBar = styled.div`
  width: 100%;
  max-width: 554px;
  padding: 5px;
  background: linear-gradient(90deg, #713BE4 ${props => props.percent}%, #D9D9D9 ${props => props.percent + 5}%);
  color: #713BE4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  margin-left: auto;
  margin-right: auto;
;

`;