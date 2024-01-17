import styled from 'styled-components'; 
import { IoMdClose } from "react-icons/io";

export const StyledUserMenu = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  padding: 35px 20px;
  border: 9px solid #D55DE0;
  border-radius: 15px;
  background-color: white;
  position: absolute;
  z-index: 800;
  top: 12px;
  left: 0;
  transform: translateX(-100%);
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
`;

export const UserMenuCloseBtn = styled.button`
  background: none;
  top: 0;
  right: 0;
  cursor: pointer;
  border: none;
  position: absolute;
`;

export const UserMenuStyledClose = styled(IoMdClose)`
  fill: #713BE4;
  width: 25px;
  height: 25px;
  transition: fill 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
`;

export const UserMenuName = styled.h3`
  align-self: center;
  font-family: NeueMachina;
  font-size: 24px;
  font-weight: 300;
  line-height: 23px;
  color: #713BE4;
`;
export const UserMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style: none;
`;
export const UserMenuListItem = styled.li`
  display: flex;
  gap: 6px;
  align-items: center;
  &:nth-child(3n){
    margin-left: 38px;
  }
  
`;
export const UserMenuListItemImg = styled.img`
  width: 32px;
  height: 32px;
`;
export const UserMenuListLink = styled.a`
  color: black;
  text-decoration: none;
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  &:hover,
  &:focus{
    color: #713BE4;
  }
`;