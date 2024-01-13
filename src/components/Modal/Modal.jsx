import { useState } from "react";
import { ChangeModalBtn, CloseBtn, GoogleBtn, InputContainer, LeftPart, ModalAddIndfo, ModalForm, ModalHeaders, RightPart, StyledClose, StyledInput, StyledModal, SubmitBtn } from "./Modal"
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop.jsx";


const Modal = ({ closeModal }) => {
  
  const [changeModal, setChangeModal] = useState(true);

  return (
    <>
      <ModalBackdrop >
        {changeModal ? <StyledModal>
          <CloseBtn  type="button"><StyledClose onClick={closeModal}/></CloseBtn>
          <LeftPart>
            <ModalHeaders>
              Регистрация
            </ModalHeaders>
            <ModalAddIndfo>
              Ещё нет аккаунта?
            </ModalAddIndfo>
            <ChangeModalBtn onClick={() => setChangeModal(false)}>
              Зарегистрироваться
            </ChangeModalBtn>
          </LeftPart>
          <RightPart>
            <ModalHeaders>
              Вход
            </ModalHeaders>
            <GoogleBtn>
              Использовать Google
            </GoogleBtn>
            <p>OR</p>
            <ModalForm>
              <InputContainer>
                <label for="user_mail">
                 E-mail
                </label>
                <StyledInput  id="user_mail" type="text" name="user_mail"/>
              </InputContainer>
              <InputContainer>
                <label for="user_password">
              Пароль
              </label>
              <StyledInput id="user_password" type="text" name="user_password" />
              </InputContainer>
              
              <SubmitBtn type="submit">Войти</SubmitBtn>
            </ModalForm>
          </RightPart>
        </StyledModal>
          :
        <StyledModal>
          <CloseBtn  type="button"><StyledClose onClick={closeModal}/></CloseBtn>
          <LeftPart>
            <ModalHeaders>
              Авторизация
            </ModalHeaders>
            <ModalAddIndfo>
              Уже есть аккаунт?
            </ModalAddIndfo>
            <ChangeModalBtn onClick={() => setChangeModal(true)}>
              Войти
            </ChangeModalBtn>
          </LeftPart>
          <RightPart>
            <ModalHeaders>
              Регистрация
            </ModalHeaders>
            <GoogleBtn>
              Использовать Google
            </GoogleBtn>
            <p>OR</p>
            <ModalForm>
              <InputContainer>
                <label for="user_mail">
                 E-mail
                </label>
                <StyledInput  id="user_mail" type="text" name="user_mail"/>
              </InputContainer>
              <InputContainer>
                <label for="user_name">
                 Имя пользователя
                </label>
                <StyledInput  id="user_name" type="text" name="user_name"/>
              </InputContainer>
              <InputContainer>
                <label for="user_password">
              Пароль
              </label>
              <StyledInput id="user_password" type="text" name="user_password" />
              </InputContainer>
              
              <SubmitBtn type="submit">Зарегистрироваться</SubmitBtn>
            </ModalForm>
          </RightPart>
        </StyledModal>
        }
        
      </ModalBackdrop>
    </>
  )
}

export default Modal