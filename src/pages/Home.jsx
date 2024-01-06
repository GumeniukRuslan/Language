import { useEffect, useState } from "react"
import MainHeader from "../components/MainHeader/MainHeader.jsx"
import HeroSection from "../components/HeroSection/HeroSection.jsx"
import SelectionSection from "../components/SelectionSection/SelectionSection.jsx"
import Footer from "../components/Footer/Footer.jsx"

const Home = () => {

  return (
    <>
      <MainHeader />
      <main>
        <HeroSection />
        <SelectionSection />
        <Footer/>
      </main>
    </>
    
  )
}

export default Home