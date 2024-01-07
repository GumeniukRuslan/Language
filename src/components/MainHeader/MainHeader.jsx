import out from '../../assets/icons/Out.svg'
import { StyledHeader, StyledOutBtn } from './MainHeader.js'

const MainHeader = ({openModal}) => {

  return (
    <>
      <StyledHeader>
        <StyledOutBtn onClick={openModal} type="button"> Войти <img src={out} alt="" /></StyledOutBtn>
      </StyledHeader>
    </>
  )
}

export default MainHeader