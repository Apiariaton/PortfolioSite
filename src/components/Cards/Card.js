import "./Card.css";
import { Fragment, useState } from "react";
import journal from "../../images/journal.jpeg";
import { useMediaQuery } from "react-responsive";
// import food_app;
// import interest_table;
// import shopping_cart;

function Card(props) {

  const mobileFrame = useMediaQuery({minWidth: 320,maxWidth:480});

  const [linkVisible,toggleLinkVisible] = useState(false);
  const hoverHandler = (booleanState) => {
    if (!mobileFrame)
    toggleLinkVisible(booleanState);
  };
  
  return (
  
    <Fragment>
      <a className="card_container" href={props.demoLink} onMouseEnter={()=>{hoverHandler(true);}} onMouseLeave={()=>{hoverHandler(false)}}>
      {linkVisible && <div className="code_card"><p1><a href={props.gitLink}>Code</a> </p1><p2><a href={props.demoLink}>Demo</a></p2></div>}
      <img className="card_image" src={require(`../../images/${props.imageLink}.jpeg`)}></img>
      <p1 className="card_title">{props.title} <br></br></p1>
      <p2 className="card_technologies">{props.technologies}<br></br></p2>  
      </a>
    </Fragment>
  );

  {
    /* gitLink={card.gitLink} demoLink={card.demoLink}
imageLink= {card.imagename} technologies={card.technologies} title={card.title}*/
  }
}

export default Card;
