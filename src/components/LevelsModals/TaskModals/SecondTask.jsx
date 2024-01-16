import { CloseTaskBtn, StyledTaskClose, MatchItem, RightBtn, RightBtnImg, MatchLevelModal, LeftBtn, LeftBtnImg, MatchTaskName, MatchContainer, MatchList } from "../LevelsModals.js";
import rightArrow from "../../../assets/images/RightArrow.png"
import leftArrow from "../../../assets/images/LeftArrow.png"

const SecondTask = ({closeModal, handleRightClick, handleLeftClick}) => {
  
  return (
    <MatchLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>

      <MatchTaskName>Задание на соответсвие</MatchTaskName>
      
      <MatchContainer>
        <MatchList>
          <MatchItem>Bye</MatchItem>
          <MatchItem>He</MatchItem>
          <MatchItem>Hi</MatchItem>
          <MatchItem>She</MatchItem>
        </MatchList>
        <MatchList>
          <MatchItem>Привет</MatchItem>
          <MatchItem>Пока</MatchItem>
          <MatchItem>Он</MatchItem>
          <MatchItem>Она</MatchItem>
        </MatchList>
      </MatchContainer>
      
      <LeftBtn onClick={handleLeftClick} type="button"><LeftBtnImg src={leftArrow} alt="" /></LeftBtn>
      <RightBtn onClick={handleRightClick} type="button"><RightBtnImg src={rightArrow} alt="" /></RightBtn>
    </MatchLevelModal>
  )
}

export default SecondTask