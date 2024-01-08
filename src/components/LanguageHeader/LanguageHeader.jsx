import out from '../../assets/icons/Out.svg'
import menu from '../../assets/icons/Menu.svg'
import flag from '../../assets/images/flag.jpg'
import { Flag, FlagContainer, LanguageContainer, LanguageName, StyledLanguageHeader, StyledLanguageMenuBtn, StyledLanguageOutBtn, UserName } from './LanguageHeader.js'

const LanguageHeader = () => {

  return (
    <>
      <StyledLanguageHeader>
        <LanguageContainer>
          <StyledLanguageMenuBtn type="button"> <img src={menu} alt="" /></StyledLanguageMenuBtn>
          <FlagContainer>
            <Flag src={flag} alt="" />
            <LanguageName>English language</LanguageName>
          </FlagContainer>
        </LanguageContainer>
        <UserName>Username</UserName>
        <StyledLanguageOutBtn  type="button"> <img src={out} alt="" /></StyledLanguageOutBtn>
      </StyledLanguageHeader>
    </>
  )
}

export default LanguageHeader