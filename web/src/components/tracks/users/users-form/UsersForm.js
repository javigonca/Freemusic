import React from "react";
import { useForm } from "react-hook-form";

function UsersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onblur" });

  const onUserSubmit = (user) => {
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit(onUserSubmit)}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Name
        </span>
        <input
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Name"
          {...register("name", { required: "User name is required" })}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name?.message}</div>
        )}
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Username
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

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
        imageUrl
        </span>
        <input
          type="text"
          className={`form-control ${errors.imageUrl ? "is-invalid" : ""}`}
          placeholder="imageUrl"
          {...register("imageUrl")}
        />
        {errors.imageUrl && (
          <div className="invalid-feedback">{errors.imageUrl?.message}</div>
        )}
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
        Password
        </span>
        <input
          type="text"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="password"
          {...register("password", { required: "User password is required" })}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password?.message}</div>
        )}
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
        Email
        </span>
        <input
          type="text"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="email@example.com"
          {...register("email", { required: "User email is required" })}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email?.message}</div>
        )}
      </div>



      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
  );
}

export default UsersForm;
