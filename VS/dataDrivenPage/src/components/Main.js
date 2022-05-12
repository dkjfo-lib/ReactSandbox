import Card from './Card'
import CardsInfo from '../cardData'

export default function Main(){
    const Cards = CardsInfo.map(cardInfo => 
        <Card
            img = {cardInfo.img}
            description = {cardInfo.description}
            price = {cardInfo.price}
            timesLeft = {cardInfo.timesLeft}
        />
    )  
    const CardsRow2 = CardsInfo.map(cardInfo => 
        <Card {...cardInfo}/>
    )  
    return(
        <div className="main">
            <h1 className="main-header">FunFacts about coke</h1>
            <ul className="main-items-holder">
                <li>Was first released in 2003</li>
                <li>Was super cool</li>
                <li>Consoome the content</li>
            </ul>
            <div className="main-card-holder">
                {Cards}
            </div>
            <div className="main-card-holder">
                {CardsRow2}
            </div>
        </div>
    )
}