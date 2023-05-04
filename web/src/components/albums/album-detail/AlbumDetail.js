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
        <p>Loading...</p>
      ) : (
        <>
          <h1 className="text-white">{album.name}</h1>

          <ul className="text-white">
            {album.tracks.map((t) => (
              
              <li key={t.id}> <button className="nav-link"
              onClick={() => handleClic(t.url)}>{t.name}</button></li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default AlbumDetail;
