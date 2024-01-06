import { Motivation, SelectionHeader, StyledSelectionSection } from "./SelectionSection"


const SelectionSection = () => {

  return (
    <>
      <StyledSelectionSection>
        <SelectionHeader>Выберите тот язык,</SelectionHeader>
        <div></div>
        <SelectionHeader style={{textAlign: 'right'}}>Который хотели бы изучать</SelectionHeader>
      </StyledSelectionSection>
      <SelectionHeader>Стимул к учебе</SelectionHeader>
      <Motivation>Обучение проходит в интерактивном
        игровом формате, что поможет лучше 
        запоминать материал
      </Motivation>
    </>
  )
}

export default SelectionSection