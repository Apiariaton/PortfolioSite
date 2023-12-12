import "./RightPanel.css";
import profileImg from "../../images/ProfileImg.jpg";
import {Fragment} from 'react';

let homeContent = <div className="right_panel_background_home">
<img className="profile_image" alt="profile_image" src={profileImg}></img>
</div>;

let aboutContent = <div className="right_panel_background_home">
<div className="text_description_about"><br/>I’ve been a programmer <br/>
since June 2022; at <br/> 
university, <br/>I studied French <br/>
and  Russian, and <br/> 
during  my free time, <br/>
I enjoy music and <br/> 
hiking.</div>
</div>;;


function RightPanel(props)
{

if (props.size === "desktop")
{
    homeContent = <div className="right_panel_background_home">
    <img className="profile_image_desktop" alt=" " src={profileImg}></img>
    </div>;
    
    aboutContent = <div className="right_panel_background_home">
    <div className="text_description_about_desktop"><br/>I’ve been a programmer <br/>
    since June 2022; at <br/> 
    university, <br/>I studied French <br/>
    and  Russian, and <br/> 
    during  my free time, <br/>
    I enjoy music and <br/> 
    hiking.</div>
    </div>;
}



    return (
    <Fragment>
    {props.page === "home" && homeContent}
    {props.page === "about" && aboutContent}    
    </Fragment>
    );
};

export default RightPanel;