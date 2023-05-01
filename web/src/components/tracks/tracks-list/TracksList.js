import React, { useEffect, useState } from "react";
import tracksService from "../../../services/tracks";
import TrackItem from "../track-item/TrackItem";

function TracksList() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    tracksService
      .list()
      .then((tracks) => setTracks(tracks))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container-sm">
    <table className="table text-white">
      <thead>
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Album</th>
          <th scope="col">Duración</th>
        </tr>
      </thead>
      {tracks.map((track) => (
        <TrackItem key={track.id} track={track} />
      ))}
    </table>
    </div>
  );
}

export default TracksList;
