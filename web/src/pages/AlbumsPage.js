import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import AlbumsList from '../components/albums/album-list/AlbumsList'
import TracksList from '../components/tracks/tracks-list/TracksList'

function AlbumsPage() {
  return (
    <PageLayout>
      <div className='row'>
        <div className='col-15'><AlbumsList/></div>        
      </div>

    </PageLayout>
  )
}

export default AlbumsPage