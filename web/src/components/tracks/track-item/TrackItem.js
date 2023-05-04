import React from "react";

function TrackItem({ track, handleClic }) {
  return (
    <tbody>
      <tr>
        <td>
          <div className="text-decoration-none">
            <button
              className="nav-link text-white"
              onClick={() => handleClic(track.url)}
            >
              {track.name}
            </button>
          </div>
        </td>
        {track.album.map((a,i) => <td key={i}>{a.name}</td>)}
        <td></td>
      </tr>
    </tbody>
  );
}

export default TrackItem;
