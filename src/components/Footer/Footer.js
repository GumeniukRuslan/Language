import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 21px 10px;
  border-top: 1px solid #713BE4;
  margin-top: 95px;
`;
export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;
export const FooterLinks = styled.a`
  text-decoration: none;
  color: #807E7E;
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  &:hover,
  &:focus{
    color: #713BE4;
  }
`;

