import React from 'react'

  

function Searchbar({ search, onSearch }) {
  const handleChange = (ev) => {    
    onSearch(ev.target.value)
  }

  return (
    <input 
    type='text'
    placeholder='¿What do you want to listen to?'
    className='form form-control'
    value={search}
    onChange={handleChange}>
    </input>
  )
}

export default Searchbar