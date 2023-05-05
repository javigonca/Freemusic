import React from "react";

import UsersLogin from "../components/users/users-login/UsersLogin";
import logo from "../assets/img/logoOne.png";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="container p-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="max-auto">
            <img
              src={logo}
              alt="Freemusic"
              className="rounded float-start"
              style={{ maxHeight: "130px" }}
            />
            <h1 className="pt-4 text-white"> Fremusic</h1>
            <p className="text-secondary"> Login</p>
          </div>
          <UsersLogin />
          <hr />
          <p className="m-0 text-white">
            Don't have an account yet?{" "}
            <Link to="/users"> Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
