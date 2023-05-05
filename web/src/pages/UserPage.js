import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import UserDetail from '../components/users/user-detail/UserDetail'
import logo from "../assets/img/logoOne.png";

function UserPage() {
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
            <p className="text-secondary"> Profile</p>
          </div>
          <UserDetail/>
          <hr />          
        </div>
      </div>           
    </PageLayout>
    
  )
}

export default UserPage