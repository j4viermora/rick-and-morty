import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  
  const [ active, setActive ] = useState(false);

  const handleBurguer = () => {

        setActive( !active )

  };
  
  return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
              Rick and Morty by Javier
          </Link>
      
          <Link
          onClick={handleBurguer} 
          to="/character" 
          role="button" 
          className={`navbar-burger ${ active && 'is-active'} `} 
          aria-label="menu" 
          aria-expanded="false"
          data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
      
        <div 
        className={ `navbar-menu ${(active) && 'is-active'}` }
        >
          <div className="navbar-end">
            <Link to="/character" className="navbar-item">
              Characters
            </Link>
            <Link to="/episode" className="navbar-item">
              Episodes
            </Link>
            <Link to="/search" className="navbar-item">
              Search
            </Link>
            <Link to="/favorites" className="navbar-item" >
                  Favorites
            </Link>
          </div>   
        </div>
      </nav>
    )
}
