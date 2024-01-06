import triangle from '../../assets/images/Polygon 2.png'
import { AdditionalHeroHeader, HeroHeader, HeroHeaderConrainer, HeroHeaderWord, StyledHeroSection, Triangle } from './HeroSection.js'

const HeroSection = () => {

  return (
      <StyledHeroSection>
      <Triangle src={triangle} alt="" />
      <HeroHeaderConrainer>
        <HeroHeader><HeroHeaderWord>Language</HeroHeaderWord> dictionary</HeroHeader>
        <AdditionalHeroHeader><HeroHeaderWord>- Это</HeroHeaderWord>  возможность узнать новые языки</AdditionalHeroHeader>
      </HeroHeaderConrainer>
      
      </StyledHeroSection>
  )
}

export default HeroSection