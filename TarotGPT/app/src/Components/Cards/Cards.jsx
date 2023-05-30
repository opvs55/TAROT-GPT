import { CardBack, CardContainer, CardFront } from "./Cards.Styled";
import back from "./../../assets/back.png"



export function Card(props) {


    const { 
        img,
        name, 
        handleFlip, 
        index, 
        flip, 
        treecards 
    } = props




    return (
        <CardContainer
            treecards={treecards ? "true" : "false"} 
            flip={flip ? "true" : "false"} 
            name={name} 
            onClick={() => handleFlip(index)}
            index={index}
        >
            <CardBack back={back} />
            <CardFront img={img}>
                <div className="name">{name}</div>
            </CardFront>
        </CardContainer>
    )
}