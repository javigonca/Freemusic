import React from 'react'

  

function Searchbar({ search, onSearch }) {
  const handleChange = (ev) => {    
    onSearch(ev.target.value)
  }

  return (
    <input 
    style={{width: "25rem"}}
    type='text'
    placeholder='¿What do you want to listen to?'
    className='form form-control rounded-pill'
    value={search}
    onChange={handleChange}>
    </input>
  )
}

export default Searchbar