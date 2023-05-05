import React, { useState } from 'react'
import PageLayout from "../components/layout/PageLayout";
import AlbumDetail from '../components/albums/album-detail/AlbumDetail';
import Audioplayer from '../components/audioPlayer/Audioplayer';


function AlbumPage() {
  const [trackUrl, setTrackUrl] = useState();

  const handleClic = (url) => {
    console.log(url);
    setTrackUrl(url);
  };

  return (
    <PageLayout>      
      <div className="row">
        <div className="col-15">
          <AlbumDetail handleClic={handleClic} />
          <Audioplayer trackUrl={trackUrl}/>
        </div>
      </div>
    </PageLayout>
  )
}

export default AlbumPage