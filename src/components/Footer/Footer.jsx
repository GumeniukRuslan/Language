import { FooterLinks, FooterList, StyledFooter } from "./Footer"



const Footer = () => {

  return (
    <StyledFooter>
      <FooterList>
        <li><FooterLinks href="/">Служба подждержки</FooterLinks></li>
        <li><FooterLinks href="/">Контакты</FooterLinks></li>
        <li><FooterLinks href="/">О нас</FooterLinks></li>
      </FooterList>
    </StyledFooter>
  )
}

export default Footer