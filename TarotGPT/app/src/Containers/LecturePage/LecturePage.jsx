import { useEffect, useState } from "react";
import { CardPage } from "./CardContainer/CardContainer";
import { LecturePageContainer } from "./LecturePage.styled";
import { TextPage } from "./TextContainer/TextPage";
import { cartas } from "../../constants/array";
import { shuffleArray } from "../../Actions/SuffleArray";

export function LecturePage(props) {

    const {
        setHomepage,
        homepage,
        previsao,
        handleSend,
        lecture,
        setLecture,
        setPrevisao } = props;



    //define as cartas de tarot
    const [cartasTarot, setCartasTarot] = useState([])

    //controle de fluxo
    const [cardpage, setCardpage] = useState(false);
    const [treecards, setTreeCards] = useState(false);
    const [reset, setReset] = useState(false)

    //guarda o valor das cartas
    const [cardNumbers, setCardsNumbers] = useState(0)

    const [combination, setCombination] = useState("")
    //guarda o texto

    const [displayedText, setDisplayedText] = useState("");

    const text = "QQuerido cliente, permita-me mergulhar nas energias místicas e revelar os segredos que o destino guarda para você. Por favor, feche os olhos, concentre-se nas suas perguntas e, com as mãos sobre as cartas, escolha intuitivamente três delas. Essas cartas revelarão as mensagens do universo e nos guiarão em nossa jornada espiritual. Esteja preparado para desvendar mistérios e receber orientações preciosas. Vamos começar!";

    useEffect(() =>{
        const arrayCartas = cartas
        setCartasTarot(arrayCartas)
    }, [reset])

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prevText) => prevText + text.charAt(currentIndex));
            }
            if (currentIndex === text.length) {
                clearInterval(interval);
            }
            currentIndex++;
        }, 40);
        return () => {
            clearInterval(interval);
        };
    }, [text]);



    return (
        <LecturePageContainer
            homepage={homepage ? "true" : "false"}
            cardpage={cardpage ? "true" : "false"}
            treecards={treecards ? "true" : "false"}
            lecture={lecture ? "true" : "false"}
        >
            {cardpage ?
                <div className="second" >
                    {lecture ?
                        <div className="texto" style={{ display: `${lecture ? 'block' : 'none'}` }}>
                            <TextPage
                                setHomepage={setHomepage}
                                previsao={previsao}
                                cartasTarot={cartasTarot}
                                setCardpage={setCardpage}
                                setTreeCards={setTreeCards}
                                setCombination={setCombination}
                                setLecture={setLecture}
                                treecards={treecards}
                                setPrevisao={setPrevisao}
                                setCartasTarot={setCartasTarot}
                                setCardsNumbers={setCardsNumbers}
                                setReset={setReset}
                            />
                        </div> :
                        <div className="card" style={{ display: `${lecture ? 'none' : 'block'}` }}>
                            <CardPage
                                setCombination={setCombination}
                                treecards={treecards}
                                setTreeCards={setTreeCards}
                                combination={combination}
                                handleSend={handleSend}
                                cartasTarot={cartasTarot}
                                setCartasTarot={setCartasTarot}
                                setCardsNumbers={setCardsNumbers}
                                cardNumbers={cardNumbers}
                            />

                        </div>}
                </div> :
                <div className="first">
                    <h4>{displayedText}</h4>
                    <button className="lectureBotton" onClick={() => { setCardpage(true); setDisplayedText(""); setCartasTarot(shuffleArray(cartas)) }}>Então me mostre das cartas!!</button>
                </div>
            }
        </LecturePageContainer>
    );
}
