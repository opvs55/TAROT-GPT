import { keyframes, styled } from "styled-components";








export const HomePageContainer = styled.div`

//propriedades
width: 100vw;
height: 100vh;
background-color: black;
color: white;
opacity: .9;

position: absolute;

display:flex;
flex-direction: column;

border-radius: 10px;
box-shadow: 2px 2px 4px #000, -2px -2px 4px black;


@media screen and (max-width: 768px) {
        width: 412px;
        height: 914px;
        left: 0;
        
}

//

//efeitos

//configurações divs


.top{
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: 2s;
    position: relative;

    @media screen and (max-width: 768px) {
      height: 300px;
      width: 100%;
    }
}

.botton{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 40%;

    h2{
        width: 80%;
        letter-spacing: 10px;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }


    @media screen and (max-width: 768px) {
    height: 50%;
    width:100%;
    }
}

button{
  width: 350px;
  height: 40px;
  background-color: #663399;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;

  margin-bottom: 10px;

  &:hover {
    background-color: #9966cc;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #9966cc;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
}
`


const rotateAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const CardBack = styled.div`
  position: absolute;
  width: 200px;
  height: 355px;
  background-image: url(${props => props.cardbackhomepage});
  background-size: contain;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  border-radius: 10px;
  left: 585px;
  top: 20px;
  animation: ${rotateAnimation} 10s infinite linear;


@media screen and (min-width: 1600px) {
    left: 850px;
    top: 200px;
}

@media screen and (max-width: 768px) {
    width: 100px;
    height: 180px;
    left:160px;
    top: 40px      
}
`;

export const CardFront = styled.div`
  position: absolute;
  width: 200px;
  height: 355px;
  background-image: url(${props => props.cardhomepage});
  background-size: contain;
  transform: rotateY(0deg);
  border-radius: 10px;
  left: 585px;
  top: 20px;
  animation: ${rotateAnimation} 10s infinite linear;

  @media screen and (min-width: 1600px) {
    left: 850px;
    top: 200px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 180px;
    left:160px;
    top: 40px       
  }

`
