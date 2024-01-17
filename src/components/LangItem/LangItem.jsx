import toast from "react-hot-toast"
import { StyledLangItem, StyledLangItemImg } from "./LangItem"


const LangItem = ({ flag, language }) => {

  function redirect() {
    if (!localStorage.getItem("languageAccess")) {
      return toast.error("Сперва войдите в свой аккаунт")
    }
    if (language !== 'english') {
      return toast.error("Пока что доступен только Английский язык")
    }
    
    return window.location.href ='/Language/#/english'
  }

  return (
    <>
      <StyledLangItem onClick={redirect}>
        <StyledLangItemImg src={flag} alt="" />
      </StyledLangItem>
    </>
  )
}

export default LangItem