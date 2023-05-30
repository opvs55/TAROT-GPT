import { CardBack, CardFront, HomePageContainer } from "./HomePage.styled";



//importar imagems

import cardhomepage from "./../../assets/CardHomePage.png"
import cardbackhomepage from "./../../assets/backCardHomePage.png"



export function HomePage(props) {

    const{ setHomepage } = props

    return (
        
        <HomePageContainer>
            <div className="top">
                <CardFront cardhomepage={cardhomepage} />
                <CardBack cardbackhomepage={cardbackhomepage}/>
            </div>
            <div className="botton">
                <h2>Desvende os segredos do passado, compreenda o 
                    presente e ilumine o seu futuro com as sábias 
                    cartas do Tarot Cigano.</h2>
                <button onClick={() => setHomepage(false)}>Ilumine seu futuro</button>
            </div>
        </HomePageContainer>

    )
}