import { StyledContainer } from "./Container"

const Container = ({children}) => {

  return (
    <StyledContainer>
       {children}
    </StyledContainer>
  )
}

export default Container