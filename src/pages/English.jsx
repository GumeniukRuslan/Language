import { useState } from "react";
import EnglishLevelsSection from "../components/EnglishLevelsSection/EnglishLevelsSection.jsx"
import LanguageHeader from "../components/LanguageHeader/LanguageHeader.jsx"
import LevelsModals from "../components/LevelsModals/LevelsModals.jsx";


const English = () => {

  const [showModal, setShowModal] = useState(false);

  function openModal() { 
    window.addEventListener('keydown', closeModalOnEsc)
    return setShowModal(true)
  }

  function closeModalOnEsc(e) {
    if (e.key === 'Escape') {
      console.log(e.key)
      window.removeEventListener('keydown', closeModal)
      return setShowModal(false)
    }
  }

  function closeModal() {
    window.removeEventListener('keydown', closeModal)
    return setShowModal(false)
  }


  return (
    <>
      <LanguageHeader />
      <main>
          <EnglishLevelsSection openModal={openModal} />
        {showModal && <LevelsModals closeModal={closeModal} />}
      </main>
    </>
    
  )
}

export default English