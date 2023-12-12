import "./LeftPanel.css";
import RightPanel from "./RightPanel";
import {Fragment} from 'react';


let homeContent = <div class="container_panels"><div className="background_left_panel_home">
<div className="profile_description">William Holder<br/> <div className="profile_description_sub_text"><a href="https://www.linkedin.com/in/william-holder-b13151244/"> Front-End Developer </a> </div></div>
</div>
<RightPanel page="home"/></div>;



let aboutContent = <div class="container_panels"><div className="background_left_panel_about">
</div><RightPanel page="about"/></div>;


function LeftPanel(props){
    if (props.size === "desktop")
    {
        homeContent = <div class="container_panels"><div className="background_left_panel_home">
        <div className="profile_description_desktop">William Holder<br/> <div className="profile_description_sub_text_desktop"><a href="https://www.linkedin.com/in/william-holder-b13151244/">  Programmer </a> </div></div>
        </div>
        <RightPanel page="home" size="desktop"/></div>;
        
        aboutContent = <div class="container_panels"><div className="background_left_panel_about">
        </div><RightPanel page="about" size="desktop"/></div>;
    
    }



    return ( <Fragment>
        {props.page === "home" && homeContent}
        {props.page === "about" && aboutContent}
        </Fragment>
    );
};

export default LeftPanel;