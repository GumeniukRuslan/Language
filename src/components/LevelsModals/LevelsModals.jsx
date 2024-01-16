
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop.jsx";
import FirstTask from "./TaskModals/FirstTask.jsx";
import FourthTask from "./TaskModals/FourthTask.jsx";
import SecondTask from "./TaskModals/SecondTask.jsx";
import ThirdTask from "./TaskModals/ThirdTask.jsx";


const LevelsModals = ({ closeModal, setCurrentModal, currentModal }) => {
  
  
  const modals =
    [<FirstTask handleRightClick={handleRightClick} closeModal={closeModal} />,
      <SecondTask handleRightClick={handleRightClick} handleLeftClick={handleLeftClick} closeModal={closeModal} />,
      <ThirdTask handleRightClick={handleRightClick} handleLeftClick={handleLeftClick} closeModal={closeModal}/>,
      <FourthTask handleLeftClick={handleLeftClick} closeModal={closeModal}/>];

  function handleLeftClick () {
    setCurrentModal((currentModal - 1 + modals.length) % modals.length);
  };

  function handleRightClick () {
    setCurrentModal((currentModal + 1) % modals.length);
  };
  
  return (
    <ModalBackdrop>
      {modals[currentModal]}
    </ModalBackdrop>
  )
}

export default LevelsModals