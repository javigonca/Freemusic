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
              <NavLink to="/" className="nav-link">
                <span className="text-white ms-0">Freemusic</span>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {user?.email ? (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-dark  dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.username}
                  </button>

                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <NavLink to="/profile" className="dropdown-item">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/favourites" className="dropdown-item">
                        Favourites
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/tracks" className="dropdown-item">
                        Your music
                      </NavLink>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => logout()}
                      >
                        Logout
                      </button>
                    </li>
                    <li>
                      <NavLink to="/" className="dropdown-item">
                        Home
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/users" className="nav-link">
                    <span className="text-white">Register</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
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
