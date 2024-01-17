import styled from 'styled-components';

export const StyledLanguageHeader = styled.header`
  display: flex;
  padding: 12px 29px;
  max-width: 1510px;
  margin: 0 auto;
  position: relative;
  justify-content: space-between;
  
`;

export const ScoreCounter = styled.p`
  color: #713BE4;

  font-family: NeueMachina;
  font-size: 25px;
  font-weight: 400;
  line-height: 39px;

  @media screen and (min-width: 1450px) {
    font-size: 40px;
  }
  
`
export const StyledLanguageMenuBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: NeueMachina;
  font-size: 25px;
  font-weight: 300;
  line-height: 31px;
  color: white;
  cursor: pointer;
  padding: 0;
  &>img{
    max-width: 32px;
    @media screen and (min-width: 1450px) {
    max-width: 100%;
  }
  }
  @media screen and (min-width: 1450px) {
    font-size: 40px;
  }
`

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`
export const FlagContainer = styled.div`
  display: none;

  @media screen and (min-width: 850px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`
export const Flag = styled.img`
 width: 66px;
`
export const LanguageName = styled.p`
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  color: #713BE4;

`
export const UserName = styled.p`
  align-self: flex-end;
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 400;
  color: #713BE4;
  margin: 0;
  position: absolute;
  bottom: 20px;
  left: 50%;

`

