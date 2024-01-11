import ModalBackdrop from "../ModalBackdrop/ModalBackdrop.jsx";
import FirstTask from "./TaskModals/FirstTask.jsx";


const LevelsModals = ({closeModal}) => {
  
  return (
    <ModalBackdrop>
      <FirstTask closeModal={closeModal}/>
    </ModalBackdrop>
  )
}

export default LevelsModals