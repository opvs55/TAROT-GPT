import { useEffect, useState } from "react";
import { Card } from "../../../Components/Cards/Cards";
import { TextPageContainer } from "./TextPage.styled";






export function TextPage(props) {

    const {
        setHomepage,
        previsao,
        cartasTarot,
        setCardpage,
        setTreeCards,
        setLecture,
        treecards,
        setPrevisao,
        setCombination,
        setCardsNumbers,
        setReset
    } = props

    const [text, setText] = useState("")
    const [currentCharIndex, setCurrentCharIndex] = useState(0);


    const handleFlop = () => {

    }

    useEffect(() => {
        if (currentCharIndex < previsao.length) {
            const timeoutId = setTimeout(() => {
                setText(prevText => prevText + previsao[currentCharIndex]);
                setCurrentCharIndex(prevIndex => prevIndex + 1);
            }, 40);
            return () => clearTimeout(timeoutId);
        }
    }, [currentCharIndex, previsao]);


    const resetGame = () => {
        cartasTarot.forEach((carta) => {
            carta.flipped = false;
        });
        
        setReset(true)
        setText("");
        setHomepage(true);
        setCardpage(false);
        setLecture(false);
        setPrevisao("");
        setCombination("");
        setCardsNumbers(0);
        setTreeCards(false);
    };



    useEffect(() => {
        console.log(cartasTarot);
    }, [cartasTarot]);

    return (
        <TextPageContainer>
            <div className="lecturecard">
                {cartasTarot
                    .filter((carta) => carta.flipped)
                    .map((carta, index) => (
                        <Card
                            key={index}
                            img={carta.img}
                            name={carta.nome}
                            flip={carta.flipped}
                            index={index}
                            handleFlip={handleFlop}
                            treecards={treecards}
                        />
                    ))}
            </div>
            <div className="previsao">
                {text}
            </div>
            <div className="buttondiv">
                <button onClick={() => {
                    resetGame()
                }} className="bottonlecture">
                    Iniciar outra Leitura
                </button>
            </div>

        </TextPageContainer>
    )
}