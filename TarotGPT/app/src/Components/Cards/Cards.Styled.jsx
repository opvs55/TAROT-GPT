import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  width: 120px;
  height: 210px;
  border-radius: 10px;
  margin: 10px;

  
  perspective: 1000px;
  cursor: pointer;
  transition: 2s;
  transform-style: preserve-3d;

  ${props =>
    props.flip === "true"
      ? css`
          /* Estilos quando flip for true */
          transform: rotateY(180deg);
        `
      : css`
          /* Estilos quando flip for false */
          transform: rotateY(0);
        `}

  ${props =>
    props.treecards === "true"
      ? css`
          /* Estilos quando treecards for true */
          margin: 50px;

          &:hover{
            transform: rotateY(180deg) scale(1.5);
          }


          @media screen and (max-width: 768px) {
            margin: 5px;
          }
        `
      : css`
          /* Estilos quando treecards for false */
        `}
`;


export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.back});
  background-size: contain;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  border-radius: 10px;
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: contain;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 10px;


  display:flex;


  .name{
    font-size: 15px;
    font-family: Helvetica, sans-serif;
    color: white;
    height: 0px;
    font-weight: bold;
    position: absolute;
    top: 210px;
  }
`;
