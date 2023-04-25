import React, { useEffect, useState } from "react";
import tracksService from "../../services/tracks";

function TracksList() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    tracksService.list()
    .then((tracks) => setTracks(tracks))
    .catch(console.error)
  }, []);

  return (
    <>
      <h1>Tracks List</h1>
      {tracks.map((track) => (
        <div key={track.id}>{track.name}</div>
      ))}
    </>
  );
}

export default TracksList;
