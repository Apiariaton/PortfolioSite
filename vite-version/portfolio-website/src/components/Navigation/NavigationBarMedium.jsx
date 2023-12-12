import "./NavigationBar.css";
import { NavLink } from "react-router-dom";

function NavigationBarMedium() {
  return (
    <header className="mobile_header">
      <div className="initial_items_laptop">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "mobile_navlink active_link" : "mobile_navlink"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "mobile_navlink active_link" : "mobile_navlink"
          }
        >
          About
        </NavLink>
      </div>
      <div className="spacer"></div>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "laptop_navlink_projects active_link"
              : "laptop_navlink_projects"
          }
        >
          Projects
        </NavLink>
    </header>
  );
}

export default NavigationBarMedium;
