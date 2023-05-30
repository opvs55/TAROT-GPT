import { useEffect, useState } from "react";
import { Card } from "../../../Components/Cards/Cards";
import { CardContainer } from "./CardContainer.styled";




export function CardPage(props) {



    const {
        setCombination,
        previsao,
        handleSend,
        combination,
        treecards,
        setTreeCards,
        cartasTarot,
        setCartasTarot,
        cardNumbers,
        setCardsNumbers
    } = props


    
    const [flop, setFlop] = useState(false)

    //funcao virar
    const handleFlip = (index) => {

        const updatedCartas = [...cartasTarot];
        const selectedCard = updatedCartas[index];

        // Verifica se a carta já foi selecionada
        if (selectedCard.selected) {
            return; // A carta já foi selecionada, não faz nada
        }

        selectedCard.flipped = !selectedCard.flipped;

        setCartasTarot(updatedCartas); // Atualiza o estado com as cartas modificadas

        const number = cardNumbers + 1;
        setCardsNumbers(number);

        if (cardNumbers === 2) {
            setTreeCards(true);
        }
    };

    const handleFlop = () => {
    }

    useEffect(() => {
        if (treecards) {
            const flippedCartas = cartasTarot
                .filter((carta) => carta.flipped === true)
                .map((carta) => carta.nome);


            setCombination(flippedCartas.join(", "));
        }
    }, [treecards, previsao]);


    

    return (

        <CardContainer treecards={treecards ? "true" : "false"}>
            <div className="cards">
                {treecards
                    ? cartasTarot
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
                        ))
                    : cartasTarot.map((carta, index) => (
                        <Card
                            key={index}
                            img={carta.img}
                            name={carta.nome}
                            flip={carta.flipped}
                            handleFlip={handleFlip}
                            index={index}
                        />
                    ))}
            </div>

            <div className="start">
                {treecards ? 
                <button className="button" 
                onClick={() => {handleSend(combination) ; setCardsNumbers(0)}}>
                    Gostaria de receber sua leitura?
                </button>
                : <></>}
            </div>

        </CardContainer>

    )
}