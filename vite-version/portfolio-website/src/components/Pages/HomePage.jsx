import {useMediaQuery} from "react-responsive";
import PhonePanel from "../UI/PhonePanel";
import LeftPanel from "../UI/LeftPanel";
function HomePage()
{

    const desktopFrame = useMediaQuery({minWidth:1025});
    const laptopFrame = useMediaQuery({minWidth: 481,maxWidth:1024});
    const mobileFrame = useMediaQuery({minWidth: 320,maxWidth:480});

    return <div> 
    
    {mobileFrame && <PhonePanel page="home"/>}
    {laptopFrame && <LeftPanel page="home"/>}
    {desktopFrame && <LeftPanel page="home" size="desktop"/>}

    </div>
    ;



};

export default HomePage;