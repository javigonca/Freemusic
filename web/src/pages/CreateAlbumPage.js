import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import AlbumForm from '../components/albums/album-form/AlbumForm'
import logo from "../assets/img/logoOne.png"

function CreateAlbumPage() {
  return (
    <PageLayout>     
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="max-auto">
            <img
              src={logo}
              alt="Freemusic"
              className="rounded float-start"
              style={{ maxHeight: "130px" }}
            />
            <h1 className="pt-4 text-white"> Fremusic</h1>
            <p className="text-secondary"> Create your music album </p>
          </div>
          <AlbumForm/>
          <hr />          
        </div>
      </div>           
    </PageLayout>
    
  )
}

export default CreateAlbumPage