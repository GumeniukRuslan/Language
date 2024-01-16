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
      <UserMenuName>Username</UserMenuName>
      <UserMenuList>
        <UserMenuListItem><UserMenuListItemImg src={profile} alt="" /><UserMenuListLink href="/profile">Профиль</UserMenuListLink></UserMenuListItem>
        <UserMenuListItem><UserMenuListItemImg src={profilEexit} alt="" /><UserMenuListLink onClick={exit} href="/">Выйти из аккаунта</UserMenuListLink></UserMenuListItem>
        <UserMenuListItem><UserMenuListLink href="/">Главная страница</UserMenuListLink></UserMenuListItem>
      </UserMenuList>
    </StyledUserMenu>
  )
}

export default UserMenu