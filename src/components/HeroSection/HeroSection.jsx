import { AdditionalHeroHeader, HeroHeader, HeroHeaderConrainer, HeroHeaderWord, StyledHeroSection, Triangle } from './HeroSection.js'

const HeroSection = () => {

  return (
      <StyledHeroSection>
        <HeroHeaderConrainer>
          <HeroHeader><HeroHeaderWord>Language</HeroHeaderWord> dictionary</HeroHeader>
          <AdditionalHeroHeader><HeroHeaderWord>- Это возможность</HeroHeaderWord> узнать новые языки</AdditionalHeroHeader>
        </HeroHeaderConrainer>
      
      </StyledHeroSection>
  )
}

export default HeroSection