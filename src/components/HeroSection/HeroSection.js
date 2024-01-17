import styled from 'styled-components';
import triangle from '../../assets/images/Polygon2.png'
import triangleMobile from '../../assets/images/TriangleMobile.png'


export const StyledHeroSection = styled.section`
position: relative;
height: 100vh;
background: url(${triangleMobile}), conic-gradient(from 180deg at 50% 50%, #713BE4 -89.53deg, rgba(246, 0, 192, 0) 17.23deg, rgba(16, 69, 255, 0.27) 30.06deg, #713BE4 270.47deg, rgba(246, 0, 192, 0) 377.23deg);
background-position: left center;
background-size: contain;
background-repeat: no-repeat;
display: flex;
padding: 0 20px;
justify-content: center;
align-items: center;
@media screen and (min-width: 1450px) {
    background: url(${triangle}), conic-gradient(from 180deg at 50% 50%, #713BE4 -89.53deg, rgba(246, 0, 192, 0) 17.23deg, rgba(16, 69, 255, 0.27) 30.06deg, #713BE4 270.47deg, rgba(246, 0, 192, 0) 377.23deg);
    background-size: contain;
  background-repeat: no-repeat;
  }
`

export const HeroHeaderConrainer = styled.div`
text-align: center;

@media screen and (min-width: 1450px) {
    margin-left: 250px;
  }
`
export const HeroHeader = styled.h1`
font-family: NeueMachina;
font-size: 30px;
font-weight: 400; 
margin-bottom: 39px;
@media screen and (min-width: 1450px) {
    margin-bottom: 50px;
    font-size: 70px;
  }
`
export const HeroHeaderWord = styled.span`
color: white;
`
export const AdditionalHeroHeader = styled.div`
font-family: NeueMachina;
font-size: 18px;
font-weight: 300;
line-height: 31px;
@media screen and (min-width: 1450px) {

    font-size: 32px;
  }
`
