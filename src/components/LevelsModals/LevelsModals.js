import styled from 'styled-components';
import firstModal from '../../assets/images/Level1FirstModal.png'
import secondModalLeft from '../../assets/images/SecondTaskLeft.png'
import secondModalRight from '../../assets/images/SecondTaskRight.png'
import videoBcg from '../../assets/images/VideoTaskBcg.png'
import fourthTaskBcg from '../../assets/images/FourthTaskBcg.png'
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

//ThirdTask --------------------------------------------------------]

export const VideoLevelModal = styled.div`
  padding: 20px;
  width: 916px;
  height: 558px;
  position: relative;
  background: url(${videoBcg});
  background-position: right bottom;
  background-repeat: no-repeat;
  background-color: #B0C7E2;
  border: 9px solid #C379F5;
  border-radius: 8px;
`;
export const VideoTaskName = styled.h2`
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  display: block;
  color: #713BE4;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`;
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 477px;
`;
export const VideoTaskDescription = styled.h3`
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 17px;
  color: #713BE4;
`;
export const StyledVideo = styled.video`
  width: 318px;
  height: 237px;
  background-color: black;
`;

export const VideoTaskForm = styled.form`
  display: flex;
  margin-top: 2px;
  gap: 11px;
`;
export const VideoTaskFormInput = styled.input`
  border: 3px solid #BA9AFF;
  border-radius: 10px;
  width: 100%;
  padding: 1px 17px;
  color: #713BE4;
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 17px;
`;
export const VideoTaskFormSubmit = styled.button`
  border: none;
  border-radius: 24px;
  font-family: NeueMachina;
  font-size: 17px;
  font-weight: 400;
  line-height: 16px;
  color: white;
  padding: 0px 10px;
  cursor: pointer;
  background: linear-gradient(180deg, #CB15DB 0%, #713BE4 100%);
`;

// FourthTask-----------------------------------------------------------

export const TranslationLevelModal = styled.div`
  padding: 20px;
  width: 916px;
  height: 558px;
  position: relative;
  background: url(${fourthTaskBcg}), conic-gradient(from 180deg at 50% 50%, #FEBBBA 0deg, #3BC6E4 264.52deg, #AE8BF1 306.91deg, #FEBBBA 360deg), linear-gradient(0deg, #C379F5, #C379F5);
;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: #B0C7E2;
  border: 9px solid #C379F5;
  border-radius: 8px;
`;

export const TranslationTaskName = styled.h2`
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  display: block;
  color: white;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 25px;
`;

export const TranslationTaskDescription = styled.h3`
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 17px;
  color: black;
  margin-bottom: 18px;
`;
export const TranslationTaskGoal = styled.p`
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 17px;
  color: black;
  text-transform: uppercase;
  margin-bottom: 22px;
`;

export const TranslationTaskForm = styled.form`
  display: flex;
  margin-top: 2px;
  gap: 11px;
`;
export const TranslationTaskFormInput = styled.input`
  border: 3px solid #BA9AFF;
  border-radius: 10px;
  width: 100%;
  padding: 1px 17px;
  color: #713BE4;
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 17px;
`;
export const TranslationTaskFormSubmit = styled.button`
  border: none;
  border-radius: 24px;
  font-family: NeueMachina;
  font-size: 17px;
  font-weight: 400;
  line-height: 16px;
  color: white;
  padding: 0px 10px;
  cursor: pointer;
  background: linear-gradient(180deg, #CB15DB 0%, #713BE4 100%);
`;