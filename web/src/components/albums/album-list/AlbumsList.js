import React, { useEffect, useState } from "react";
import albumsService from "../../../services/albums";
import AlbumItem from "../album-items/AlbumItem";
import { Link, NavLink } from "react-router-dom";

function AlbumsList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    albumsService
      .list()
      .then((albums) => setAlbums(albums))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="accordion-collapse collapse show">
      <div className="accordion-body">
        <div className="row g-2">
          {albums.map((album) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
              key={album.id}
            >
              <AlbumItem album={album} />
            </div>
          ))}
        </div>
      </div>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/tracks">
            <button className="btn btn-light mt-5">All Tracks</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AlbumsList;
