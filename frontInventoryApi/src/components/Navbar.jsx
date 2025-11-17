import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
   return (
      <nav className="navbar-home navbar navbar-expand-sm bg-dark shadow-lg p-3 sticky-top">
         <div className="container-fluid">
            <Link to="/home" className="navbar-brand text-info">
               Inventory System
            </Link>
            <Toggler />
            <div className="collapse navbar-collapse mt-2" id="navbarText">
               <UlNav />
            </div>

         </div>
      </nav>
   )
}

const Toggler = () => {
   return (
      <button
         className="navbar-toggler bg-gradient border-2 border-black"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarText"
         aria-controls="navbarText"
         aria-expanded="false"
         aria-label="Toggle navigation"
      >
         <i className="fa-solid fa-bars py-2"></i>
      </button>
   );
}

const UlNav = () => {
   return (
      <ul className="navbar-nav ms-auto mb-lg-0 gap-2">
         <li className="nav-item">
            <Link className="btn btn-outline-info" to={"/guide"}>
               Guide
            </Link>
         </li>
         <li className="nav-item">
            <Link className="btn btn-outline-danger" to={"/signIn"}>
               Logout
            </Link>
         </li>
      </ul>
   );
}
