import "./ProjectsPage.css";
import Cards from "../Cards/Cards";
import {useMediaQuery} from "react-responsive";
import {Fragment, useEffect} from 'react';
import {fetchCardData}  from "../../store/card-actions";
import { useSelector, useDispatch } from "react-redux";
import ErrorPage from "./ErrorPage";

function ProjectsPage()
{
    const dispatch = useDispatch();
    const loadCards = useSelector(state=>state.cardSliceReducer.loadCards);
    const cardMaterial = useSelector(state=>state.cardSliceReducer.cards)[0];
    const errorMessage = useSelector(state=>state.cardSliceReducer.errorMessage);
    const desktopFrame = useMediaQuery({minWidth:1025});
    const laptopFrame = useMediaQuery({minWidth: 481,maxWidth:1024});
    const mobileFrame = useMediaQuery({minWidth: 320,maxWidth:480});

    console.log(cardMaterial);
    let desktopContent = <Fragment> {loadCards ? <div className="projects_page_background"><Cards cards={cardMaterial}></Cards> </div> : <ErrorPage error={errorMessage}></ErrorPage>}
    </Fragment>;    


    let laptopContent = <Fragment> {loadCards ? <div className="projects_page_background"><Cards cards={cardMaterial}></Cards> </div> : <ErrorPage error={errorMessage}></ErrorPage>}
    </Fragment>;

    let mobileContent = <Fragment> {loadCards ? <div className="projects_page_background_mobile"><Cards cards={cardMaterial}></Cards> </div> : <ErrorPage error={errorMessage}></ErrorPage>}
    </Fragment>;

useEffect(()=>{dispatch(fetchCardData());},[dispatch,fetchCardData,loadCards]);
console.log(loadCards);

return <Fragment>


{mobileFrame && mobileContent}
{laptopFrame && laptopContent}
{desktopFrame && desktopContent}


</Fragment>


};

export default ProjectsPage;