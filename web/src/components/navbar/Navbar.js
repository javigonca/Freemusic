import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logoOne.png";
import Searchbar from "../serachBar/Searchbar";
import { AuthContext } from "../../contexts/AuthStore";

const renderNavLinkClassName = ({ isActive }) =>
  isActive ? "nav-link active" : "nav-link";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  

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
          <div className="position-absolute top-15 start-50 ">
            <Searchbar />
          </div>
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={renderNavLinkClassName}>
                <span className="text-white ms-0">Freemusic</span>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {user?.email ? (
              <>
                <li className="nav-item">
                  <NavLink to="/profile" className={renderNavLinkClassName}>
                    <span className="text-white">{user.username}</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link text-white"
                    onClick={() => logout()}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/users" className={renderNavLinkClassName}>
                    <span className="text-white">Register</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className={renderNavLinkClassName}>
                    <span className="text-white">Login</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
