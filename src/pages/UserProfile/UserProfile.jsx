import UserMenu from "../../components/UserMenu/UserMenu.jsx"
import menu from '../../assets/icons/Menu.svg'
import { StyledLanguageMenuBtn } from "../../components/LanguageHeader/LanguageHeader.js";
import Container from "../../components/Container/Container.jsx";
import gold from "../../assets/images/Gold.png"
import silver from "../../assets/images/Silver.png"
import bronze from "../../assets/images/Bronze.png"
import { ProfileUserName, ProfileHeader, ProfilePhotoGag, ProfileSectionHeader, ProfileSections, ProfileUserEmail, ProfileRecordsList, ProfileRecordsListItem, ProfileRecordsScore, SettingsForm, FormUserNameField, FormUserNameInput, FormRadioContainer, FormRadioLabel, FormRadioSettingName, ProfileFormSubmit } from "./UserProfile.js";


const UserProfile = () => {

  function openMenu() {
    const menu = document.querySelector('#userMenu')
    menu.style.transform = "translateX(0%)";
  }

  return (
    <>
      <UserMenu/>
      <ProfileHeader>
        <StyledLanguageMenuBtn onClick={openMenu} type="button"> <img src={menu} alt="" /></StyledLanguageMenuBtn>
      </ProfileHeader>
      
      <main>
        <Container>

          <ProfileSections>
            <ProfileSectionHeader isFirst>
              Профиль
            </ProfileSectionHeader>
              <div>
                <ProfilePhotoGag>
                  <p>Загрузить фото</p>
                </ProfilePhotoGag>
                {/* <img src="" alt="" /> */}
                <ProfileUserName>Nastya</ProfileUserName>
              </div>
              <ProfileUserEmail>nastia@gmail.com</ProfileUserEmail>
          </ProfileSections>

          <ProfileSections isSecond> 
            <ProfileSectionHeader isSecond>
              Рекорды
            </ProfileSectionHeader>
            <ProfileRecordsList>
              <ProfileRecordsListItem><img src={gold} alt="" /> <p>First</p> <ProfileRecordsScore>5</ProfileRecordsScore></ProfileRecordsListItem>
              <ProfileRecordsListItem><img src={silver} alt="" /> <p>Second</p> <ProfileRecordsScore>4</ProfileRecordsScore></ProfileRecordsListItem>
              <ProfileRecordsListItem><img src={bronze} alt="" /> <p>Third</p> <ProfileRecordsScore>1</ProfileRecordsScore></ProfileRecordsListItem>
            </ProfileRecordsList>
          </ProfileSections>

          <ProfileSections isThird>
            <ProfileSectionHeader isThird>
              Настройки
            </ProfileSectionHeader>
            <SettingsForm>
              <FormUserNameField>
                Имя пользователя
                <FormUserNameInput type="text" name="name" />
              </FormUserNameField>
              <FormRadioContainer>
                <FormRadioSettingName>Звук</FormRadioSettingName>
                <FormRadioLabel for="radio1">Вкл.
                  <input type="radio" id="radio1" name="radiobuttons1" value="radio1"/>
                </FormRadioLabel>
                <FormRadioLabel for="radio2">Откл.
                  <input type="radio" id="radio2" name="radiobuttons1" value="radio2"/>
                </FormRadioLabel>
              </FormRadioContainer>
              <FormRadioContainer>
                <FormRadioSettingName>Тема</FormRadioSettingName>
                <FormRadioLabel for="radio3">Светлая
                  <input type="radio" id="radio3" name="radiobuttons2" value="radio3"/>
                </FormRadioLabel>
                <FormRadioLabel last for="radio4">Тёмная
                  <input type="radio" id="radio4" name="radiobuttons2" value="radio4"/>
                </FormRadioLabel>
              </FormRadioContainer>
              <ProfileFormSubmit type="submit">Сохранить изменения</ProfileFormSubmit>
            </SettingsForm>
          </ProfileSections>

        </Container>
      </main>
    </>
    
  )
}

export default UserProfile