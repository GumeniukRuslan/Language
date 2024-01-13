import styled from 'styled-components';
import traveling from "../../assets/images/travelingimg.png"
export const StyledEnglishLevelMeeting = styled.section`
  padding: 65px 29px 20px 29px;
  background-image: url("IMAGE_URL"), linear-gradient(#eb01a5, #d13531);
  background: linear-gradient(180deg, rgba(255,189,246,1) 10%, rgba(144,237,255,1) 100%);
`;

export const StyledEnglishLevelThemeTitle = styled.h2`
  font-family: NeueMachina;
  font-size: 32px;
  font-weight: 300;
  line-height: 43px;
  color: #713BE4;
  padding: 0;
  margin-bottom: 60px;
  margin-top: 0px;
  text-transform: uppercase;
  letter-spacing: 6px;
`;

export const Meetingimg = styled.img`
  width: 771px;
`;

export const LevelsContainer = styled.div`
  display: flex;
  gap: 250px;
`;

export const LevelsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  margin: 0;
`;

export const LevelItem = styled.li`
  
  &:nth-child(odd){
  }
  &:nth-child(even){
    margin-left: 185px;
  }
`;

export const LevelBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
`;

export const NumberImg = styled.img`
 width: 97px;
`;
export const LockImg = styled.img`
 width: 70px;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-55%, -60%);
`;
// ----------------------------------------------------------------
export const StyledEnglishLevelTraveling = styled.section`
  padding: 20px 29px 0px 29px;
  background: url(${traveling}), linear-gradient(180deg, rgba(144,237,255,1) 10%, rgba(161,32,195,1) 100%);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;



export const LevelsTravelList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  margin: 0;
`;

export const LevelTravelItem = styled.li`
  
  &:nth-child(odd){
    margin-left: 185px;
  }
  &:nth-child(even){
    
  }
`;