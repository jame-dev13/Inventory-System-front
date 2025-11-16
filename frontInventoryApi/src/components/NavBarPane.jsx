import React from 'react'
import { Modal } from './Modal';

export const NavBarPane = () => {
   return (
      <nav className="navbar navbar-expand-lg bg-body-secondary rounded">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">
               <i className="fa-solid fa-arrow-rotate-right"></i>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <NavOptions />
               <FilterField />
            </div>
         </div>
      </nav>
   )
}

const NavOptions = ( {icon = "fa-solid fa-user-plus"}) => {
   return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
            <button type='button'
               className='btn btn-outline-dark'
               data-bs-toggle="modal"
               data-bs-target="#addUser">
               <i className={icon}></i>
            </button>
            <Modal id="addUser" />
         </li>
      </ul>
   );
}

const FilterField = () => {
   return (
      <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
         <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
   )
}