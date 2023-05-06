import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import albumsService from "../../../services/albums";

function AlbumDetail({ handleClic }) {
  const { albumId } = useParams();
  const [album, setAlbum] = useState();

  useEffect(() => {
    async function fetchAlbum() {
      try {
        const album = await albumsService.detail(albumId);
        setAlbum(album);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAlbum();
  }, [albumId]);

  return (
    <>
      {!album ? (
        <p className="text-white">Loading...</p>
      ) : (
        <>
          <h1 className="text-white">{album.name}</h1>
          <ul className="list-group list-group-numbered mb-3">
            {album.tracks.map((t) => (
              <li
                className="list-group-item bg-black d-flex justify-content-start align-items-start text-white border border-0"
                style={{ width: "75rem" }}
                key={t.id}
              >
                {" "}
                <button type="button" class="list-group-item-action list-group-item-action active bg-black text-white border-0 ms-1" aria-current="true" className="nav-link" onClick={() => handleClic(t.url)}>
                  {t.name}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default AlbumDetail;
