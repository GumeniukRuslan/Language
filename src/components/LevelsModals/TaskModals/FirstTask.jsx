import { CloseTaskBtn, StyledTaskClose, VocabularyLevelModal, VocabularyTaskName, VocabularyList, VocabularyItem, RightBtn, RightBtnImg } from "../LevelsModals.js";
import rightArrow from "../../../assets/images/RightArrow.png"

const FirstTask = ({closeModal}) => {
  
  return (
    <VocabularyLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>
      <VocabularyTaskName>Словарь</VocabularyTaskName>
      <VocabularyList>
        <VocabularyItem>Hi/Bye - привет/пока</VocabularyItem>
        <VocabularyItem>Name - имя</VocabularyItem>
        <VocabularyItem>My name is Stasy - меня зовут Стейси</VocabularyItem>
        <VocabularyItem>He/she/it - он/она/оно</VocabularyItem>
        <VocabularyItem>He is Alex - его зовут Алекс</VocabularyItem>
      </VocabularyList>
      <RightBtn type="button"><RightBtnImg src={rightArrow} alt="" /></RightBtn>
    </VocabularyLevelModal>
  )
}

export default FirstTask