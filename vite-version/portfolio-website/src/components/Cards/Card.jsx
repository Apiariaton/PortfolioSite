import "./Card.css";
import { Fragment, useState } from "react";
import imageDictionary from "../../images/imageDictionary";
import { useMediaQuery } from "react-responsive";

function Card(props) {

  const mobileFrame = useMediaQuery({minWidth: 320,maxWidth:480});

  const [linkVisible,toggleLinkVisible] = useState(false);
  const hoverHandler = (booleanState) => {
    if (!mobileFrame)
    toggleLinkVisible(booleanState);
  };

  const cardImage = imageDictionary[props.imageLink];

  return (
    <Fragment>
      <a className="card_container" href={props.demoLink} onMouseEnter={()=>{hoverHandler(true);}} onMouseLeave={()=>{hoverHandler(false)}}>
      {linkVisible && <div className="code_card"><p1><a href={props.gitLink}>Code</a> </p1><p2><a href={props.demoLink}>Demo</a></p2></div>}
      <img className="card_image" alt="card_image" src={cardImage}></img>
      <p1 className="card_title">{props.title} <br></br></p1>
      <p2 className="card_technologies">{props.technologies}<br></br></p2>  
      </a>
    </Fragment>
  );
}

export default Card;
