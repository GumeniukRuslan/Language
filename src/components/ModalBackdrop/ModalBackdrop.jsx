import { Backdrop } from "./ModalBackdrop"


const ModalBackdrop = ({children}) => {
  
  return (
    <Backdrop>
      {children}
    </Backdrop>
  )
}

export default ModalBackdrop