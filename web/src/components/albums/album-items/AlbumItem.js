import React from "react";
import "./AlbumItem.css";
import { Link } from "react-router-dom";

function AlbumItem({ album: { imageUrl, name, tracks, id } }) {
  return (
    <div className="album-item card">
      <img
        src={imageUrl}
        className="card-img"
        style={{ width: "10rem" }}
        alt={name}
      />
      <div>
        <div className="d-flex flex-column h-100">
          <div className="d-flex align-items-baseline">
            <h5 className="card-title px-3 py-1 fs-5 fw-lighter text-dark me-auto">
              <Link
                to={`/albums/${id}`}
                className="text-dark link-underline-opacity-0"
              >
                {name}
              </Link>
            </h5>
            <h1 className="text-white">{tracks.name} </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumItem;
