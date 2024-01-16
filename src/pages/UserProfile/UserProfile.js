import styled from 'styled-components';
import duck from '../../assets/images/ProfileDuck.png';
import duckMobile from '../../assets/images/DuckMobile.png';
import scoreBcg from '../../assets/images/ScoreBcg.png';
import scoreBcgMobile from '../../assets/images/scoreBcgMobile.png';

export const ProfileHeader = styled.header`
  padding: 5px 10px;
  max-width: 430px;
  margin: 0 auto;
  @media screen and (min-width: 1450px) {
    max-width: 1510px;
    padding: 10px 14px;
  }
`;
export const ProfileSections = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px 5px ${props => props.isThird ? `50px` : props.isSecond ? '68px' : '30px'} 5px;
  border-top:${props => props.isSecond && `3px solid #713BE4`};
  border-bottom: ${props => props.isSecond && `3px solid #713BE4`};
  background: ${props => props.isSecond && `url(${scoreBcgMobile})`};
  background-position: center center;
  background-repeat: no-repeat;
  position: ${props => props.isThird && `relative`};

  @media screen and (min-width: 1450px) {
  flex-direction: row;
  justify-content: flex-start;
  background: ${props => props.isSecond && `url(${scoreBcg})`};
  padding: 25px 14px ${props => props.isThird ? `100px` : '30px'} 14px;
  }
`;
export const ProfileSectionHeader = styled.h2`
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
  color: #713BE4;
  text-transform: uppercase;
  margin-bottom: 15px;
  
  @media screen and (min-width: 1450px) {
    margin-bottom: 0px;
    margin-right: ${props => { 
      if(props.isFirst){
        return '517px'
      }
      if(props.isSecond){
        return '517px'
      }
      if(props.isThird){
        return '298px'
      }
      }};
  }
`;
// -----------------------------------------------------

export const ProfilePhotoGag = styled.div`
  cursor: pointer;
  width: 133px;
  height: 133px;
  background: url(${duckMobile}), conic-gradient(from 180deg at 50% 50%, rgba(113, 59, 228, 0.72) -47.98deg, rgba(236, 5, 227, 0.44) 46.14deg, rgba(113, 59, 228, 0.72) 312.02deg, rgba(236, 5, 227, 0.44) 406.14deg);
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  &>p{
    text-align: center;
    max-width: 72px;
    font-size: 14px;
  }

  @media screen and (min-width: 1450px) {
    width: 223px;
    height: 223px;
    padding-bottom: 11px;
    background: url(${duck}), conic-gradient(from 180deg at 50% 50%, rgba(113, 59, 228, 0.72) -47.98deg, rgba(236, 5, 227, 0.44) 46.14deg, rgba(113, 59, 228, 0.72) 312.02deg, rgba(236, 5, 227, 0.44) 406.14deg);
    background-position: center center;
    background-repeat: no-repeat;
    &>p{
      text-align: center;
      max-width: 121px;
      font-size: 22px;
    }
  }
`;

export const ProfileUserName = styled.p`
  text-align: center ;
  margin-top: 25px;  
  margin-bottom: 15px;
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
  color: #713BE4;
  @media screen and (min-width: 1450px) {
    margin-bottom: 0px;
  }
`
export const ProfileUserEmail = styled.p`
  flex-grow: 1;
  display: block;
  max-width: 377px;
  border: 1px solid #E3CECE;
  background-color: #E7E7E7;
  border-radius: 10px;
  color:#713BE4;
  padding: 10px;
  @media screen and (min-width: 1450px) {
    margin-left: 86px;
  }
`;

// ---------------------------------------------------

export const ProfileRecordsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 9px;
  list-style: none;
  @media screen and (min-width: 1450px) {
    gap: 28px;
  }
`;
export const ProfileRecordsListItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  @media screen and (max-width: 1449px) {
    &>img{
      max-width: 28px;
      max-height: 23px;
    }
  }
  
  @media screen and (min-width: 1450px) {
    font-size: 24px;
    gap: 30px;
  }
`;
export const ProfileRecordsScore = styled.p`
  margin-left: auto;
  text-decoration: underline;
`;

// -----------------------------------------------------

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 1450px) {
    gap: 40px;
    align-items: center;
  }
`;
export const FormUserNameField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
  @media screen and (min-width: 1450px) {
    flex-direction: row;
    gap: 67px;
  }
`;
export const FormUserNameInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #E3CECE;
  background-color: #E7E7E7;
  border-radius: 10px;
  color:#713BE4;
  padding: 10px;
  
  @media screen and (min-width: 1450px) {
    max-width: 377px;
  }
`;
export const FormRadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 52px;
  align-self: flex-start;
  @media screen and (min-width: 1450px) {
    gap: 110px;
  }
`;
export const FormRadioSettingName = styled.p`
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  @media screen and (min-width: 1450px) {
    font-size: 24px;
  }
`;
export const FormRadioLabel = styled.label`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 25px;
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  margin-left: ${props => props.last && `-34px`};
  &>input{
    max-width: 15px;
  }
  @media screen and (min-width: 1450px) {
    font-size: 24px;
    gap: 40px;
    margin-left: ${props => props.last && `-46px`};
    &>input{
      width: 24px;
    }
  }
`;
export const ProfileFormSubmit = styled.button`
  position: absolute;
  cursor: pointer;
  width: 98%;
  bottom: 0px;
  left: 1%;
  border: 1px solid #BA9AFF;
  border-radius: 10px;
  background-color: #F6D9F5;
  color: #713BE4;
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  padding: 3px 0;
  @media screen and (min-width: 1450px) {
    font-size: 24px;
    padding: 11px 0;
    bottom: 10px;
  }

`;