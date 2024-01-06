import out from '../../assets/icons/Out.svg'
import { StyledHeader, StyledOutBtn } from './MainHeader.js'

const MainHeader = () => {

  return (
    <>
      <StyledHeader>
        <StyledOutBtn type="button"> Войти <img src={out} alt="" /></StyledOutBtn>
      </StyledHeader>
    </>
  )
}

export default MainHeader