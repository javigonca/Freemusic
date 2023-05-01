import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import TrackItem from "../tracks/track-item/TrackItem";

function Audioplayer() {
  const [track, setTrack] = useState("");

  const trackPlay = (track) => {
    console.log(track);
    setTrack(track);
  };

  return (
    <div>
      <ReactAudioPlayer src={track.url} autoPlay controls />
    </div>
  );
}

export default Audioplayer;
