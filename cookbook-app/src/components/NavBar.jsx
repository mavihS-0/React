import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./components.css";

const NavBar = ({ user, setUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navBarWrapper">
      <div className="appNameWrapper">
        <NavLink to="/">CookBook</NavLink>
      </div>
      <div className={`navBarElements ${menuOpen ? "showMenu" : ""}`}>
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        {!user && (
          <NavLink to="/login" onClick={toggleMenu}>
            Login
          </NavLink>
        )}
        {user && (
          <NavLink
            onClick={() => {
              toggleMenu();
              localStorage.removeItem("username");
              setUser("");
            }}
            to="/login"
          >
            Logout
          </NavLink>
        )}
      </div>

      <div className="hamburgerMenu" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default NavBar;
