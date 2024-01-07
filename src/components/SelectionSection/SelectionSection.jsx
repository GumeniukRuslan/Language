import LangSwiper from "../Swiper/Swiper"
import { Motivation, SelectionHeader, StyledSelectionSection } from "./SelectionSection"


const SelectionSection = () => {

  return (
    <>
      <StyledSelectionSection>
        <SelectionHeader>Выберите тот язык,</SelectionHeader>
        <LangSwiper/>
        <SelectionHeader style={{textAlign: 'right'}}>Который хотели бы изучать</SelectionHeader>
      </StyledSelectionSection>
      
      
      <Motivation>
        <SelectionHeader>Стимул к учебе</SelectionHeader>
        Обучение проходит в интерактивном
        игровом формате, что поможет лучше 
        запоминать материал
      </Motivation>
    </>
  )
}

export default SelectionSection