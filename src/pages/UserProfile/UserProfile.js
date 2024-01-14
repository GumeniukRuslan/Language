import styled from 'styled-components';
import duck from '../../assets/images/ProfileDuck.png';
import scoreBcg from '../../assets/images/ScoreBcg.png';

export const ProfileHeader = styled.header`
  padding: 10px 14px;
  max-width: 1510px;
  margin: 0 auto;
`;
export const ProfileSections = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 14px ${props => props.isThird ? `100px` : '30px'} 14px;
  border-top:${props => props.isSecond && `3px solid #713BE4`};
  border-bottom: ${props => props.isSecond && `3px solid #713BE4`};
  background: ${props => props.isSecond && `url(${scoreBcg})`};
  background-repeat: no-repeat;
  position: ${props => props.isThird && `relative`};
`;
export const ProfileSectionHeader = styled.h2`
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
  color: #713BE4;
  text-transform: uppercase;
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
`;
// -----------------------------------------------------

export const ProfilePhotoGag = styled.div`
  cursor: pointer;
  width: 223px;
  height: 223px;
  background: url(${duck}), conic-gradient(from 180deg at 50% 50%, rgba(113, 59, 228, 0.72) -47.98deg, rgba(236, 5, 227, 0.44) 46.14deg, rgba(113, 59, 228, 0.72) 312.02deg, rgba(236, 5, 227, 0.44) 406.14deg);
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 11px;
  &>p{
    text-align: center;
    max-width: 121px;
  }
`;

export const ProfileUserName = styled.p`
  text-align: center ;
  margin-top: 25px;  
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
  color: #713BE4;
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
  margin-left: 86px;
`;

// ---------------------------------------------------

export const ProfileRecordsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  list-style: none;
`;
export const ProfileRecordsListItem = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
`;
export const ProfileRecordsScore = styled.p`
  margin-left: auto;
  text-decoration: underline;
`;

// -----------------------------------------------------

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
export const FormUserNameField = styled.label`
  display: flex;
  gap: 67px;
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
`;
export const FormUserNameInput = styled.input`
  display: block;
  max-width: 377px;
  border: 1px solid #E3CECE;
  background-color: #E7E7E7;
  border-radius: 10px;
  color:#713BE4;
  padding: 10px;
  width: 377px;
`;
export const FormRadioContainer = styled.div`
  display: flex;
  gap: 110px;
  align-self: flex-start;
`;
export const FormRadioSettingName = styled.p`
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
`;
export const FormRadioLabel = styled.label`
  display: flex;
  flex-direction: row-reverse;
  gap: 40px;
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
  margin-left: ${props => props.last && `-46px`};
  &>input{
    width: 24px;
  }
`;
export const ProfileFormSubmit = styled.button`
  position: absolute;
  cursor: pointer;
  width: 98%;
  bottom: 5px;
  left: 1%;
  border: 1px solid #BA9AFF;
  border-radius: 10px;
  background-color: #F6D9F5;
  color: #713BE4;
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
  padding: 11px 0;


`;