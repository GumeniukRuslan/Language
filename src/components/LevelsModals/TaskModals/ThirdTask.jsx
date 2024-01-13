import { CloseTaskBtn, StyledTaskClose, RightBtn, RightBtnImg, LeftBtn, LeftBtnImg, VideoLevelModal, VideoTaskName, VideoTaskDescription, StyledVideo, VideoContainer, VideoTaskForm, VideoTaskFormInput, VideoTaskFormSubmit } from "../LevelsModals.js";
import rightArrow from "../../../assets/images/RightArrow.png"
import leftArrow from "../../../assets/images/LeftArrow.png"
import videoFirstLevel from "../../../assets/videos/firstLevel.mp4"

const ThirdTask = ({closeModal}) => {
  
  return (
    <VideoLevelModal>
      <CloseTaskBtn type="button"><StyledTaskClose onClick={closeModal} /></CloseTaskBtn>

      <VideoTaskName>Видео-фрагмент</VideoTaskName>

      <VideoContainer>
        <VideoTaskDescription>Напишите услышанное в видео:</VideoTaskDescription>
        <StyledVideo
          src={videoFirstLevel}
          controls>
          </StyledVideo>
      </VideoContainer>
      <VideoTaskForm name="videoAnswer">
        <VideoTaskFormInput type="text" />
        <VideoTaskFormSubmit type="submit">Отправить</VideoTaskFormSubmit>
      </VideoTaskForm>
      
      <LeftBtn type="button"><LeftBtnImg src={leftArrow} alt="" /></LeftBtn>
      <RightBtn type="button"><RightBtnImg src={rightArrow} alt="" /></RightBtn>
    </VideoLevelModal>
  )
}

export default ThirdTask