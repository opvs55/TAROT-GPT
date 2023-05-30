import { css, styled } from "styled-components";






export const CardContainer = styled.div`

width: 100%;
height: 500px;


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 2s;

@media screen and (max-width: 768px) {
        width: 100%;
        height: 300px;
}

@media screen and (min-width: 1600px) {
        width: 1920px;
        height: 1080px;
}


.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 30px;
    width: 1200px;


    @media screen and (max-width: 768px) {
        margin-top: 100px;
        width: 412px;
    }

    @media screen and (min-width: 1600px) {
    height: 100%;
    width: 100%;
    }
}

.button{
    width: 300px;
    height: 100px;
    background-color: #663399;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #9966cc;
    cursor: pointer;
    }

    &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #9966cc;
    }

    @media screen and (max-width: 768px) {
        margin-top: 100px;
    }
}



.start{
    display: none;
}

${props =>
        props.treecards === "true"
            ? css`
        .start{
            display: block;
        }

        @media screen and (max-width: 768px) {
        .cards{
            margin-top: 500px;
        }
        }
        ;
        `
            : css`
          /* Estilos quando homepage for false */

`}
`