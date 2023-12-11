import "./PhonePanel.css";
import ProfileImg from "../../images/ProfileImg.jpg";
import {Fragment} from 'react';
function PhonePanel(props)
{
let homeContent = <div className="phone_panel">
<div className="profile_container">
    <img className="profile_img" src={ProfileImg}></img>    
    <div className="profile_desc">William Holder</div>
    <div className="profile_desc_two"><a href="https://www.linkedin.com/in/william-holder-b13151244/">Front-End Developer</a></div>
</div>    
<div className="empty_container"></div>
</div>;

let aboutContent = <div className="phone_panel">
<div className="profile_container">
    <div className="text_description"><br/>I’ve been a programmer <br/>
since June 2022; at <br/> 
university, <br/>I studied French <br/>
and  Russian, and <br/> 
during  my free time, <br/>
I enjoy music and <br/> 
hiking.</div>
</div>       
<div className="empty_container"></div>
</div>;


return (
<Fragment>
{props.page === "home" && homeContent}
{props.page === "about" && aboutContent}



</Fragment>
);
};

export default PhonePanel;