import React from 'react'
import UsersForm from '../components/users/users-form/UsersForm'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logoOne.png'
import PageLayout from '../components/layout/PageLayout'

function RegisterPage() {
  return (
    <PageLayout>
    <div className="row justify-content-center">
      <div className="col-12 col-md-6">
        <div className="max-auto">
          <img src={logo} alt="Freemusic" className="rounded float-start" style={{ maxHeight: '130px' }} />
          <h1 className="pt-4 text-white"> Fremusic</h1>
          <p class="text-secondary"> Sign up</p>
        </div>
        <UsersForm />
        <hr />
        <p className='m-0 text-white'>Already registered? just <Link to="/login">Login!</Link></p>
      </div>
    </div>
  </PageLayout>
   
      
   
  )
}

export default RegisterPage