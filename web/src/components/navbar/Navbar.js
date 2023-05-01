import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logoOne.png";
import Searchbar from "../serachBar/Searchbar";

const renderNavLinkClassName = ({ isActive }) =>
  isActive ? "nav-link active" : "nav-link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-black">
      <div className="container">
        <Link className="navbar-brand" to="/albums">
          <img
            src={logo}
            alt="Freemusic"
            className="rounded float-start "
            style={{ maxHeight: "30px" }}
          />
          <div class="position-absolute top-15 start-50 ">
            <Searchbar />
          </div>
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/albums" className={renderNavLinkClassName}>
                <span className="text-white ms-0">Freemusic</span>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/users" className={renderNavLinkClassName}>
                <span className="text-white">Register</span>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/login" className={renderNavLinkClassName}>
                <span className="text-white">Login</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
