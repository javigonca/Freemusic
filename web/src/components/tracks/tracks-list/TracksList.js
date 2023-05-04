import React, { useEffect, useState } from "react";
import tracksService from "../../../services/tracks";
import TrackItem from "../track-item/TrackItem";
import Searchbar from "../../serachBar/Searchbar";

function TracksList({ handleClic }) {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    tracksService
      .list()
      .then((tracks) => setTracks(tracks))
      .catch((error) => console.error(error));
  }, []);

  const onSearch = (value) => {
    setSearch(value);
  };

  const trackstoShow = tracks.filter((t) =>
    t.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="container-sm">
      <div className="mb-3">
        <Searchbar search={search} onSearch={onSearch} />
      </div>
      <table className="table text-white">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Album</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        {trackstoShow.map((track) => (
          <TrackItem key={track.id} track={track} handleClic={handleClic} />
        ))}
      </table>
    </div>
  );
}

export default TracksList;
