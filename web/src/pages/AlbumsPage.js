import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import AlbumsList from '../components/albums/album-list/AlbumsList'

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