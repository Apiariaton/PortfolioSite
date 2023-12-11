import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import {useMediaQuery} from 'react-responsive';
import NavigationBarSmall from './NavigationBarSmall';
import NavigationBarMedium from './NavigationBarMedium';
import NavigationBarLarge from './NavigationBarLarge';

function NavigationBar() {
    
    const desktopFrame = useMediaQuery({minWidth:1025});
    const laptopFrame = useMediaQuery({minWidth: 481,maxWidth:1024});
    const mobileFrame = useMediaQuery({minWidth: 320,maxWidth:480});
    console.log(mobileFrame,laptopFrame,desktopFrame);
    return (

    <Fragment>
      {mobileFrame && <NavigationBarSmall/>}
      {laptopFrame && <NavigationBarMedium/>}
      {desktopFrame && <NavigationBarLarge/>}
      <Outlet />
    </Fragment>
  );
}

export default NavigationBar;
