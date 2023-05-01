import React from "react";
import PageLayout from "../components/layout/PageLayout";
import TracksList from "../components/tracks/tracks-list/TracksList";
import Audioplayer from "../components/audioPlayer/Audioplayer";

function TracksPage() {
  return (
    <PageLayout>
      <TracksList />
      <Audioplayer/>
    </PageLayout>
  );
}

export default TracksPage;
