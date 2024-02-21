import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/avatar-icon.png";

const Header = () => {
  return (
    <header>
      <Link to="/" className="site-logo">
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={logo} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
