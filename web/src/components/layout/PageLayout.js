import React from 'react'
import './PageLayout.css';
import Navbar from '../navbar/Navbar';

function PageLayout({ title, children }) {
  return (
    <div className='page-layout'>
      <Navbar />      
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default PageLayout;