import styled from 'styled-components';
import firstModal from '../../assets/images/Level1FirstModal.png'
import { IoMdClose } from 'react-icons/io';

export const CloseTaskBtn = styled.button`
  background: none;
  top: 0;
  right: 0;
  cursor: pointer;
  border: none;
  position: absolute;
`;
export const StyledTaskClose = styled(IoMdClose)`
  fill: #713BE4;
  width: 50px;
  height: 50px;
  transition: fill 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
`;

export const RightBtn = styled.button`
  background: none;
  bottom: 0;
  right: 0;
  cursor: pointer;
  border: none;
  position: absolute;
`
export const RightBtnImg = styled.img`
  width: 76px;
`
// --------------------------------------------------------------

export const VocabularyLevelModal = styled.div`
  position: relative;
  background: url(${firstModal});
  background-size: contain  ;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: white;
  border: 9px solid #C379F5;
  border-radius: 8px;
  padding: 70px 250px 150px 250px;
`;

export const VocabularyTaskName = styled.h2`
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  color: #713BE4;
  text-transform: uppercase;
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;

`;
export const VocabularyList = styled.ul`
  font-family: NeueMachina;
  font-size: 32px;
  font-weight: 400;
  line-height: 31px;
  color: #713BE4;
  /* margin-top: 80px; */
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
`;
export const VocabularyItem = styled.li`
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 400;
  line-height: 31px;
  padding: 3px 9px;
  border: 1px solid #713BE4;
  border-radius: 8px;
  background-color: #FFFFFFA8;
  color: black;
  max-width: fit-content;
`;

