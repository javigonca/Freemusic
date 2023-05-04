import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logoOne.png";
import { AuthContext } from "../../contexts/AuthStore";

const renderNavLinkClassName = ({ isActive }) =>
  isActive ? "nav-link active" : "nav-link";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-black">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Freemusic"
            className="rounded float-start "
            style={{ maxHeight: "30px" }}
          />
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
