import { useState } from "react"
import MainHeader from "../components/MainHeader/MainHeader.jsx"
import HeroSection from "../components/HeroSection/HeroSection.jsx"
import SelectionSection from "../components/SelectionSection/SelectionSection.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Modal from "../components/Modal/Modal.jsx"

const Home = () => {

  const [showModal, setShowModal] = useState(false);

  function openModal() { 
    return setShowModal(true)
  }
  function closeModal() { 
    return setShowModal(false)
  }

  return (
    <>
      <MainHeader openModal={openModal}/>
      <main>
        <HeroSection  />
        <SelectionSection />
        <Footer />
        {showModal && <Modal closeModal={closeModal} />}
        
      </main>
    </>
    
  )
}

export default Home