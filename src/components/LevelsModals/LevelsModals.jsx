import ModalBackdrop from "../ModalBackdrop/ModalBackdrop.jsx";
import FirstTask from "./TaskModals/FirstTask.jsx";
import FourthTask from "./TaskModals/FourthTask.jsx";
import SecondTask from "./TaskModals/SecondTask.jsx";
import ThirdTask from "./TaskModals/ThirdTask.jsx";


const LevelsModals = ({closeModal}) => {
  
  return (
    <ModalBackdrop>
      {/* <FirstTask closeModal={closeModal}/> */}
      {/* <SecondTask closeModal={closeModal} /> */}
      {/* <ThirdTask closeModal={closeModal}/> */}
      <FourthTask closeModal={closeModal}/>
    </ModalBackdrop>
  )
}

export default LevelsModals