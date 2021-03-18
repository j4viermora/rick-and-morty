import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
              Rick and Morty by Javier
          </Link>
      
          <Link to="/character" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
      
        <div className="navbar-menu">
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
          </div>   
        </div>
      </nav>
    )
}
