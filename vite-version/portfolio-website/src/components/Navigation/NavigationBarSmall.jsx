import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBarSmall(){


    return <header className="mobile_header">
        <div className="initial_items_mobile">
        <NavLink to="/" className={({isActive})=> isActive ? "mobile_navlink active_link" : "mobile_navlink"}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=> isActive ? "mobile_navlink active_link" : "mobile_navlink"}>About</NavLink>
        </div>
        <NavLink to="/projects" className={({isActive})=> isActive ? "mobile_navlink_projects active_link" : "mobile_navlink_projects"}>Projects</NavLink>
        </header>;
};

export default NavigationBarSmall;