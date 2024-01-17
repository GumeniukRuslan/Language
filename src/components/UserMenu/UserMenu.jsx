import profile from '../../assets/images/ProfileImg.png';
import profilEexit from '../../assets/icons/profileexit.svg';
import { StyledUserMenu, UserMenuCloseBtn, UserMenuList, UserMenuListItem, UserMenuListItemImg, UserMenuListLink, UserMenuName, UserMenuStyledClose } from './UserMenu';

const UserMenu = () => {

  function closeMenu() {
    const menu = document.querySelector('#userMenu')
    menu.style.transform = "translateX(-100%)";
  }

  function exit() {
    localStorage.removeItem("languageAccess");
  }
  
  return (
    <StyledUserMenu id='userMenu'>
      <UserMenuCloseBtn onClick={closeMenu} type="button"><UserMenuStyledClose/></UserMenuCloseBtn>
      <UserMenuName>Nastya</UserMenuName>
      <UserMenuList>
        <UserMenuListItem><UserMenuListItemImg src={profile} alt="" /><UserMenuListLink href="/Language/#/profile">Профиль</UserMenuListLink></UserMenuListItem>
        <UserMenuListItem><UserMenuListItemImg src={profilEexit} alt="" /><UserMenuListLink onClick={exit} href="/Language">Выйти из аккаунта</UserMenuListLink></UserMenuListItem>
        <UserMenuListItem><UserMenuListLink href="/Language">Главная страница</UserMenuListLink></UserMenuListItem>
      </UserMenuList>
    </StyledUserMenu>
  )
}

export default UserMenu