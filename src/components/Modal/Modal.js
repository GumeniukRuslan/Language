import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";

export const StyledModal = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 8px;
  position: relative;
  max-height: 95%;
  @media screen and (min-width: 1450px) {
    flex-direction: row;
    max-height: 100%;
  }
`;
export const CloseBtn = styled.button`
  background: none;
  top: 0;
  right: 0;
  cursor: pointer;
  border: none;
  position: absolute;
`;
export const StyledClose = styled(IoMdClose)`
  fill: #713BE4;
  width: 30px;
  height: 30px;
  transition: fill 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
`;

export const LeftPart = styled.div`
  background: conic-gradient(from 180deg at 50% 50%, #713BE4 -52.87deg, rgba(254, 2, 229, 0) 188.35deg, #713BE4 307.13deg, rgba(254, 2, 229, 0) 548.35deg);
  padding: 10px 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (min-width: 1450px) {
    padding: 20px 15px;
  }
`;
export const RightPart = styled.div`
  padding: 10px 10px;
  width: 400px;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  @media screen and (min-width: 1450px) {
    padding: 20px 15px;
    padding-bottom: 50px;
  }
`;
export const ModalHeaders = styled.h2`
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 33px;
  margin-bottom: 10px;
  @media screen and (min-width: 1450px) {
    margin-bottom: 34px;
     font-size: 24px;
  }
`;
export const ModalAddIndfo = styled.p`
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  margin-bottom: 30px;
`;
export const ModalOR = styled.div`
 display: flex;
 gap: 25px;
 justify-content: center;
 align-items: center;
`;
export const StyledLine = styled.img`
 max-width: 40%;
`;
export const ChangeModalBtn = styled.button`
  background: linear-gradient(171.92deg, #713BE4 6.22%, #E800C3 93.8%),
    linear-gradient(0deg, #E3CECE, #E3CECE);
  color: #F2EDE7;
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  border: none;
  border-radius: 24px;
  width: 100%;
  cursor: pointer;
  padding: 5px 0px;

`;
export const GoogleBtn = styled.button`
  background-color: #E7E7E7;
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  border: none;
  border-radius: 24px;
  width: 100%;
  cursor: pointer;
  padding: 5px 0px;
  margin-bottom: 10px;
  @media screen and (min-width: 1450px) {
    margin-bottom: 40px;
  }
`;
export const ModalForm = styled.form`
  margin-top: 0px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 1450px) {
    margin-top: 97px;
    gap: 40px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;
export const StyledInput = styled.input`
  border: none;
  border-radius: 18px;
  background-color: #E7E7E7;
  padding: 12px;
  
`;
export const SubmitBtn = styled.button`
  background-color: #713BE4;
  color: #F2EDE7;
  font-family: NeueMachina;
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  border: none;
  border-radius: 24px;
  width: 100%;
  cursor: pointer;
  padding: 5px 0px;
 
  
`;





