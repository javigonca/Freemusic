import React from 'react'
import logo from "../../assets/img/logoOne.png";
import { Link } from 'react-router-dom';

function HomeStart() {
  return (
    <div className='container p-5 mt-5'>           
      <div>       
        <img
            src={logo}
            alt="Freemusic"
            className="rounded float-start "
            style={{ maxHeight: "400px" }}
          />          
      </div>
      <h3 className='p-5 m-5 text-white'>Already registered? just <Link to="/login">Login!</Link></h3>

    </div>
  )
}

export default HomeStart