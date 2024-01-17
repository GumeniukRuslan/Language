import toast from "react-hot-toast"
import { StyledLangItem, StyledLangItemImg } from "./LangItem"


const LangItem = ({ flag }) => {

  function redirect() {

    if (!localStorage.getItem("languageAccess")) {
      return toast.error("Сперва войдите в свой аккаунт")
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