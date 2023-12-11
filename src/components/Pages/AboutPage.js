import {useMediaQuery} from "react-responsive";
import PhonePanel from "../UI/PhonePanel";
import {Fragment} from 'react';
import LeftPanel from "../UI/LeftPanel";

function AboutPage()
{

    const desktopFrame = useMediaQuery({minWidth:1025});
    const laptopFrame = useMediaQuery({minWidth: 481,maxWidth:1024});
    const mobileFrame = useMediaQuery({minWidth: 320,maxWidth:480});
    
    return <Fragment> 
    {mobileFrame && <PhonePanel page="about"/>}
    {laptopFrame && <LeftPanel page="about"/>}
    {desktopFrame && <LeftPanel page="about" size="desktop"/>}

    </Fragment>
    ;



};

export default AboutPage;