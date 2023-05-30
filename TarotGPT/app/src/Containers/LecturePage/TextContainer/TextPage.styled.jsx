import { styled } from "styled-components";






export const TextPageContainer = styled.div`


height: 100%;



display: flex;
flex-direction: column;
justify-content: space-evenly;


.lecturecard{
    display: flex;
    width: 1349px;
    justify-content: space-between;

    @media screen and (min-width: 1600px) {
        width: 1920px;
        height: 300px;
    }

    @media screen and (max-width: 700px) {
        margin-top: 20px;
        width: 410px;
        height: 220px;
    }
}


.buttondiv{
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 700px) {
        width: 410px;
        height: 200px;
        font-size: 15px;
    }
}

.bottonlecture{
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

    @media screen and (min-width: 1600px) {
        width: 500px;
        height: 60px;
        position: absolute;
        right: 700px;
    }
}

.previsao{
    text-align:justify;
    font-size: 18px;
    letter-spacing: 2px;
    color: white;
    height: 100%;
    width: 1349px;
    padding: 20px;

    @media screen and (min-width: 1600px) {
        width: 1920px;
        height: 300px;
        font-size: 25px;
    }

    @media screen and (max-width: 700px) {
        width: 410px;
        height: 1400px;
        font-size: 15px;
    }
}


@media screen and (max-width: 768px) {
        width: 100%;
    }

`