import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logoOne.png";
import { AuthContext } from "../../contexts/AuthStore";
import image from "../../assets/img/image.jpg";


function Navbar() {
  const { user, logout } = useContext(AuthContext);

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
        </Link>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/albums" className="nav-link">
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
                    <img
                      src={image}
                      className="rounded float-center"
                      style={{ width: "2rem" }}
                      alt=""
                    />
                  </button>

                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <NavLink to={`/users/${user.id}`} className="dropdown-item">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/tracks" className="dropdown-item">
                        All Tracks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/favourites" className="dropdown-item">
                        Favourites
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/tracks/:id" className="dropdown-item">
                        Your music
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/albums" className="dropdown-item">
                        Home
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
