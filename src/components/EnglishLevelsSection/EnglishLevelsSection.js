import styled from 'styled-components';
import traveling from "../../assets/images/travelingimg.png"
import meetingImg from "../../assets/images/Фон1_иллюстрация.png"
import meetingImgMobile from "../../assets/images/Фон1_иллюстрацияMobile.png"

export const StyledEnglishLevelMeeting = styled.section`
  padding: 65px 0 350px;
  background: url(${meetingImgMobile}), linear-gradient(180deg, rgba(255,189,246,1) 10%, rgba(144,237,255,1) 100%);
  background-position: center bottom; 
  background-repeat: no-repeat;
  @media screen and (min-width: 1450px) {
    padding: 65px 0 93px;
    background: url(${meetingImg}), linear-gradient(180deg, rgba(255,189,246,1) 10%, rgba(144,237,255,1) 100%);
    background-size: 50% contain;
    background-position: right 10% bottom; 
    background-repeat: no-repeat;
  }
`;

export const StyledEnglishLevelThemeTitle = styled.h2`
  font-family: NeueMachina;
  font-size: 20px;
  font-weight: 300;
  line-height: 43px;
  color: #713BE4;
  padding: 0;
  margin-bottom: 60px;
  margin-top: 0px;
  text-transform: uppercase;
  letter-spacing: 6px;
  @media screen and (min-width: 1450px) {
    font-size: 32px;
  }
`;



export const LevelsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 1450px) {
    gap: 15px;
  }
`;

export const LevelItem = styled.li`
  &:nth-child(odd){
  }
  &:nth-child(even){
    margin-left: auto;
  
    @media screen and (min-width: 1450px) {
      margin-left: 185px;
    }
    
  }
`;

export const LevelBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
`;

export const NumberImg = styled.img`
 max-width: 72px;
 @media screen and (min-width: 1450px) {
    max-width: 97px;
  }
`;
export const LockImg = styled.img`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-55%, -60%);
 max-width: 50px;
 @media screen and (min-width: 1450px) {
    max-width: 70px;
  }
`;
// ----------------------------------------------------------------
export const StyledEnglishLevelTraveling = styled.section`
  padding: 20px 29px 65px 29px;
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
  margin-bottom: 60px;
`;

export const LevelTravelItem = styled.li`
  
  &:nth-child(odd){
    margin-left: auto;
    @media screen and (min-width: 1450px) {
     margin-left: 185px;
    }
    
  }
  &:nth-child(even){
    
  }
`;