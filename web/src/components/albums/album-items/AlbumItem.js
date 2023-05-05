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
        <div className="card border-light text-center pb-1" style={{width: "10rem"}}>
          <div className="card-body">
            <f5 className="card-title  fw-lighter text-dark text-uppercase">
              <Link
                to={`/albums/${id}`}
                className="text-decoration-none text-dark fw-semibold"
              >
                {name}
              </Link>
            </f5>
            <h1 className="text-white ">{tracks.name} </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumItem;
