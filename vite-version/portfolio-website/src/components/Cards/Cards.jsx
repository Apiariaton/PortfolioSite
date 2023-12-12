import Card from "./Card";
import {Fragment} from 'react';

function Cards(props)
{
return (<Fragment>
{console.log(props.cards)}
{console.log(props.cards[0][1])}
{props.cards.map(
(card,index) => {return <Card key={index} gitLink={card.Code} demoLink={card.Demo}
imageLink= {card.Img} technologies={card.Technologies} title={card.Title}    
    ></Card>}    
)} 

</Fragment>);
};


export default Cards;