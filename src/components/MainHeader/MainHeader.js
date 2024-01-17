import styled from 'styled-components';

export const StyledHeader = styled.header`
  align-items: end;
  display: flex;
  justify-content: end;
  background-color: transparent;
  position: absolute;
  z-index: 500;
  right: 0;
  top: 15px;
  max-width: 1600px;
  margin: 0 auto;
`;

export const StyledOutBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 31px;
  color: white;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  &:hover,
  &:focus{
    transform: translateY(-10%);
  }
`
