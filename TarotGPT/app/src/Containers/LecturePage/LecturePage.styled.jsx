import { css, keyframes, styled } from "styled-components";








// component

export const LecturePageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;



position: absolute;

border-radius: 10px;
box-shadow: 2px 2px 4px #000, -2px -2px 4px black;

//organizando components


.text{
    display: flex;
    justify-content: center;
    align-items: center;
}

.first{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;

    @media screen and (max-width: 768px) {
        width: 350px;
    }
    
}

.secord{
    height: 300px;
}

h4 {
    width: 100%;
    height: 150px;
    transition: 4s;
    color: transparent;
    opacity: 0;
    font-family: 'Cinzel Decorative', cursive;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: justify;
    padding: 10px;
    font-size: 30px;

    @media screen and (max-width: 768px) {
        height: 350px;
        width: 350px;
        font-size: 20px;
    }

    @media screen and (min-width: 1600px) {
        height: 800px;
        width: 1500px;
        font-size: 20px;
        font-size: 40px;
    }
}

.lectureBotton{
    width: 0px;
    height: 0px;
    background-color: #663399;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 0px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;
    margin-top: 300px;

    &:hover {
    background-color: #9966cc;
    cursor: pointer;
    }

    &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #9966cc;
    }

    @media screen and (min-width: 1600px) {
        margin-top: 0px;
    } 
}


${props =>
        props.homepage === "true"
            ? css`
          /* Estilos quando homepage for true */
        ;
        `
            : css`
          /* Estilos quando homepage for false */

        width: 100%;
        height: 100%;
        background-color: black;
        opacity: .9;

        @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
        }


        .lectureBotton{
            animation: ${keyframes`
            0% {
                opacity: 0;
                
            }
            100% {
                width: 300px;
                height: 60px;
                font-size: 15px; 
            }
            `} 10s forwards ease-in-out;
        }
        h4 {
            animation: ${keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
                color:white;
                
            }
            `} 6s forwards ease-in-out;
        }
`}


${({ treecards, cardpage, lecture }) => css`
    ${cardpage === 'true' && css`

    width: 100%;
    height: 750px;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
    height: 290%;
    width: 100%;
    }

    @media screen and (min-width: 1600px) {
    height: 100%;
    width: 100%;
    }

    `}

    ${treecards === 'true' && cardpage === 'true' && css`
    height: 100%;
    width: 100%;

    @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    }

    `}
    ${lecture == "true" && cardpage == "true" && css`
    width: 100%;
    height: 170%;


    @media screen and (max-width: 768px) {
        width: 100%;
        height: 170%;
    }

    @media screen and (min-width: 1600px) {
        width: 1920px;
        height: 1080px;
    }
    `}
`}



`;
