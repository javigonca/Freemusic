import React from 'react';

import './Header.css';

function Header({ title }) {
  return (
    <div className="header container-fluid">
      <div className="container py-2">
        <h1 className="fs-5 fw-light m-0 text-white">{title}</h1>
      </div>
    </div>
  )
}

export default Header

