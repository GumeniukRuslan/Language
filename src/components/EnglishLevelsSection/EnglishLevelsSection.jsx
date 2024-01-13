import { LevelBtn, LevelItem, LevelTravelItem, LevelsContainer, LevelsList, LevelsTravelList, LockImg, Meetingimg, NumberImg, StyledEnglishLevelMeeting, StyledEnglishLevelThemeTitle, StyledEnglishLevelTraveling } from "./EnglishLevelsSection"
import meetingImg from "../../assets/images/Фон1_иллюстрация.png"
import number1 from "../../assets/images/Цифра1.png"
import number2 from "../../assets/images/цифра2.png"
import number3 from "../../assets/images/цифра3.png"
import number4 from "../../assets/images/цифра4.png"
import number5 from "../../assets/images/цифра5.png"
import number6 from "../../assets/images/Цифра6.png"
import number7 from "../../assets/images/Цифра7.png"
import number8 from "../../assets/images/Цифра8.png"
import number9 from "../../assets/images/Цифра9.png"
import number10 from "../../assets/images/Цифра10.png"
import lock from "../../assets/images/замок1.png"
import Container from "../Container/Container.jsx"

const EnglishLevelsSection = ({openModal}) => {

  return (
    <>
      <StyledEnglishLevelMeeting>
        <Container>
          <StyledEnglishLevelThemeTitle>Знакомство</StyledEnglishLevelThemeTitle>
          <LevelsContainer>
            <LevelsList>
              <LevelItem><LevelBtn type="button" onClick={openModal}><NumberImg src={number1} alt="" /> </LevelBtn></LevelItem>
              <LevelItem><LevelBtn type="button"><NumberImg src={number2} alt="" /> <LockImg src={lock} alt="" /></LevelBtn></LevelItem>
              <LevelItem><LevelBtn type="button"><NumberImg src={number3} alt="" /> <LockImg src={lock} alt="" /></LevelBtn></LevelItem>
              <LevelItem><LevelBtn type="button"><NumberImg src={number4} alt="" /> <LockImg src={lock} alt="" /></LevelBtn></LevelItem>
              <LevelItem><LevelBtn type="button"><NumberImg src={number5} alt="" /> <LockImg src={lock} alt="" /></LevelBtn></LevelItem>
            </LevelsList>
            <Meetingimg src={meetingImg} alt="" />
          </LevelsContainer>
        </Container>
      </StyledEnglishLevelMeeting>

      <StyledEnglishLevelTraveling>
        <Container>
          <StyledEnglishLevelThemeTitle>Путешествие</StyledEnglishLevelThemeTitle>
          <LevelsTravelList>
            <LevelTravelItem><LevelBtn type="button"><NumberImg src={number6} alt="" /> <LockImg src={lock} alt="" /></LevelBtn></LevelTravelItem>
            <LevelTravelItem><LevelBtn type="button"><NumberImg src={number7} alt="" /> <LockImg src={lock} alt="" /></LevelBtn></LevelTravelItem>
            <LevelTravelItem><LevelBtn type="button"><NumberImg src={number8} alt="" /> <LockImg src={lock} alt="" /></LevelBtn></LevelTravelItem>
            <LevelTravelItem><LevelBtn type="button"><NumberImg src={number9} alt="" /> <LockImg src={lock} alt="" /></LevelBtn></LevelTravelItem>
            <LevelTravelItem><LevelBtn type="button"><NumberImg src={number10} alt="" /> <LockImg src={lock} alt="" /></LevelBtn></LevelTravelItem>
          </LevelsTravelList>
        </Container>
      </StyledEnglishLevelTraveling>
    </>
    
  )
}

export default EnglishLevelsSection