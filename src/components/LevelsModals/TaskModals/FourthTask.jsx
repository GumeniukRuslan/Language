import { CloseTaskBtn, StyledTaskClose, LeftBtn, LeftBtnImg, TranslationLevelModal, TranslationTaskName, TranslationTaskForm, TranslationTaskFormInput, TranslationTaskFormSubmit, TranslationTaskDescription, TranslationTaskGoal } from "../LevelsModals.js";

import leftArrow from "../../../assets/images/LeftArrow.png"


const FourthTask = ({closeModal, handleLeftClick}) => {
  
  return (
    <TranslationLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>

      <TranslationTaskName>Перевод</TranslationTaskName>
      <TranslationTaskDescription>
        Напишите текст на английском языке:
      </TranslationTaskDescription>
      <TranslationTaskGoal>Привет -</TranslationTaskGoal>

      <TranslationTaskForm name="videoAnswer">
        <TranslationTaskFormInput type="text" />
        <TranslationTaskFormSubmit type="submit">Отправить</TranslationTaskFormSubmit>
      </TranslationTaskForm>
      
      <LeftBtn onClick={handleLeftClick} type="button"><LeftBtnImg src={leftArrow} alt="" /></LeftBtn>
    </TranslationLevelModal>
  )
}

export default FourthTask