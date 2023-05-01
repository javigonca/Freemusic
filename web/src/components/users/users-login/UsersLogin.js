import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import usersService from "../../../services/users";
import { AuthContext } from "../../../contexts/AuthStore";
import { useNavigate } from "react-router-dom";

function UsersLogin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onblur" });

  const [serverError, setServerError] = useState(undefined);
  const { onUserChange } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLoginSubmit = (user) => {
    setServerError();
    usersService
      .login(user)
      .then((user) => {
        onUserChange(user);
        navigate("/");
      })
      .catch((error) => {
        const errors = error.response?.data?.errors;
        if (errors) {
          Object.keys(errors).forEach((inputName) =>
            setError(inputName, { message: errors[inputName] })
          );
        } else {
          setServerError(error.message);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      {serverError && (
        <div className="alert alert-danger d-none d-lg-block">
          {serverError}
        </div>
      )}

      <div className="col-md-6">
        <div className="input-group pt-2">
          <span className="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-tag"
              viewBox="0 0 16 16"
            >
              <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
              <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
            </svg>
          </span>
          <input
            type="text"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            placeholder="Username"
            {...register("username")}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username?.message}</div>
          )}
        </div>
      </div>

      <div className="col-md-6">
        <div className="input-group pt-2">
          <span className="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-lock"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            </svg>
          </span>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="password"
            {...register("password", { required: "User password is required" })}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password?.message}</div>
          )}
        </div>
      </div>

      <div className="col-md-6">
        <div className="d-grid mt-2">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default UsersLogin;
