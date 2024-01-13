import { useState } from "react"
import MainHeader from "../components/MainHeader/MainHeader.jsx"
import HeroSection from "../components/HeroSection/HeroSection.jsx"
import SelectionSection from "../components/SelectionSection/SelectionSection.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Modal from "../components/Modal/Modal.jsx"
import Container from "../components/Container/Container.jsx"

const Home = () => {

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
      <MainHeader openModal={openModal}/>
      <main>
        <HeroSection  />
        <Container>
          <SelectionSection />
          <Footer />
        </Container>
        
        {showModal && <Modal closeModal={closeModal} />}
      </main>
    </>
    
  )
}

export default Home