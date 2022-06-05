import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import  logout   from "../../contexts/useLogout";
import { logout } from "../../services/AuthApi";
import Auth from "../../contexts/Auth"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./navBar.scss";

const Navbar = () => {

  const {isAuthenticated, setIsAuthenticated } = useContext(Auth);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          {(!isAuthenticated && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  <AccountCircleIcon fontSize="large" />
                </NavLink>
              </li>
            </>
          )) || (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/account">
                  Mon compte
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Déconnexion
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
