import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import TrackItem from "../tracks/track-item/TrackItem";

function Audioplayer( {trackUrl} ) {
 

  
  return (
    <div>
      <ReactAudioPlayer src={trackUrl} autoPlay controls />
    </div>
  );
}

export default Audioplayer;
