import styled from 'styled-components';
import firstModal from '../../assets/images/Level1FirstModal.png'
import secondModalLeft from '../../assets/images/SecondTaskLeft.png'
import secondModalRight from '../../assets/images/SecondTaskRight.png'
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
export const LeftBtn = styled.button`
  background: none;
  bottom: 0;
  left: 0;
  cursor: pointer;
  border: none;
  position: absolute;
`
export const LeftBtnImg = styled.img`
  width: 76px;
`
//FirstTask --------------------------------------------------------------

export const VocabularyLevelModal = styled.div`
  position: relative;
  background: url(${firstModal});
  background-size: contain  ;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: white;
  border: 9px solid #C379F5;
  border-radius: 8px;
  padding: 20px;
  min-width: 916px;
  min-height: 558px;
`;

export const VocabularyTaskName = styled.h2`
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  color: #713BE4;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 80px;

`;
export const VocabularyList = styled.ul`
  font-family: NeueMachina;
  font-size: 32px;
  font-weight: 400;
  line-height: 31px;
  color: #713BE4;
  display: inline-flex;
  margin-left: 25%;
  flex-direction: column;
  align-items: baseline;
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

//SecondTask -------------------------------------------

export const MatchLevelModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 916px;
  height: 558px;
  position: relative;
  background: url(${secondModalLeft}), url(${secondModalRight});
  background-position: left bottom, right bottom;
  background-repeat: no-repeat;
  background-color: white;
  border: 9px solid #C379F5;
  border-radius: 8px;
`;

export const MatchTaskName = styled.h2`
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  color: #713BE4;
  text-transform: uppercase;
  margin: 0;
`;
export const MatchContainer = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: space-around;
  width: 100%;
  gap: 138px;
`;
export const MatchList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 29px;
  list-style: none;
`;
export const MatchItem = styled.li`
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  width: 90%;
  padding: 10px 5px;
  border: 2px solid #F895E7;
  border-radius: 8px;
  background-color: #D9D9D9;
  color: #713BE4;
`;