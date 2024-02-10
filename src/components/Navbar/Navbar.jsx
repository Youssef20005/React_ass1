import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
   <>
  <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand fs-2 text-white text-uppercase fw-bold" to="/">start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-white text-uppercase " to="/about">about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-white text-uppercase" to="/portfoilo ">portfolio</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-white text-uppercase" to="/contact">contact</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

   </>
  )
}
