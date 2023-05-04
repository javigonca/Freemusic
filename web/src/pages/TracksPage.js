import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import TracksList from "../components/tracks/tracks-list/TracksList";
import Audioplayer from "../components/audioPlayer/Audioplayer";

function TracksPage() {
  const [trackUrl, setTrackUrl] = useState();

  const handleClic = (url) => {
    console.log(url);
    setTrackUrl(url);
  };

  return (
    <PageLayout>
      <TracksList handleClic={handleClic} />
      <Audioplayer trackUrl={trackUrl} />
    </PageLayout>
  );
}

export default TracksPage;
