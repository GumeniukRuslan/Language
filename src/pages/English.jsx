import { useState } from "react";
import EnglishLevelsSection from "../components/EnglishLevelsSection/EnglishLevelsSection.jsx"
import LanguageHeader from "../components/LanguageHeader/LanguageHeader.jsx"
import LevelsModals from "../components/LevelsModals/LevelsModals.jsx";


const English = () => {

  const [currentModal, setCurrentModal] = useState(0);

  const [showModal, setShowModal] = useState(false);

  function openModal() { 
    window.addEventListener('keydown', closeModalOnEsc)
    document.body.style.overflowY = 'hidden';
    return setShowModal(true)
  }

  function closeModalOnEsc(e) {
    if (e.key === 'Escape') {
      window.removeEventListener('keydown', closeModal)
      document.body.style.overflowY = 'auto';
      return setShowModal(false)
    }
  }

  function closeModal() {
    window.removeEventListener('keydown', closeModal)
    document.body.style.overflowY = 'auto';
    return setShowModal(false)
  }


  return (
    <>
      <LanguageHeader />
      <main>
        <EnglishLevelsSection openModal={openModal} />
        {showModal && <LevelsModals currentModal={currentModal} setCurrentModal={setCurrentModal} closeModal={closeModal} />}
      </main>
    </>
    
  )
}

export default English