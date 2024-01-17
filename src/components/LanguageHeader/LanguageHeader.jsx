
import menu from '../../assets/icons/Menu.svg'
import flag from '../../assets/images/flag.jpg'
import { Flag, FlagContainer, LanguageContainer, LanguageName, ScoreCounter, StyledLanguageHeader, StyledLanguageMenuBtn, StyledLanguageOutBtn, UserName } from './LanguageHeader.js'
import UserMenu from '../UserMenu/UserMenu.jsx'
import { useLocation } from 'react-router-dom'

const LanguageHeader = () => {

  const location = useLocation();

  function openMenu() {
    console.log(location)
    const menu = document.querySelector('#userMenu')
    menu.style.transform = "translateX(0%)";
  }

  return (
    <>
      <UserMenu/>
      <StyledLanguageHeader>
        <LanguageContainer>
          <StyledLanguageMenuBtn onClick={openMenu} type="button"> <img src={menu} alt="" /></StyledLanguageMenuBtn>
          {location.pathname === '/english' &&
            <FlagContainer>
              <Flag src={flag} alt="" />
              <LanguageName>English language</LanguageName>
            </FlagContainer>}
          
        </LanguageContainer>
        <UserName>Nastya</UserName>
        <ScoreCounter>0</ScoreCounter>
      </StyledLanguageHeader>
    </>
  )
}

export default LanguageHeader