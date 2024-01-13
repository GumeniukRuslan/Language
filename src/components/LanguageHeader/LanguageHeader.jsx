import out from '../../assets/icons/Out.svg'
import menu from '../../assets/icons/Menu.svg'
import flag from '../../assets/images/flag.jpg'
import { Flag, FlagContainer, LanguageContainer, LanguageName, StyledLanguageHeader, StyledLanguageMenuBtn, StyledLanguageOutBtn, UserName } from './LanguageHeader.js'
import UserMenu from '../UserMenu/UserMenu.jsx'

const LanguageHeader = () => {

  function openMenu() {
    const menu = document.querySelector('#userMenu')
    menu.style.transform = "translateX(0%)";
  }

  return (
    <>
      <UserMenu/>
      <StyledLanguageHeader>
        <LanguageContainer>
          <StyledLanguageMenuBtn onClick={openMenu} type="button"> <img src={menu} alt="" /></StyledLanguageMenuBtn>
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