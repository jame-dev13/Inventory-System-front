import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles/sidebar.css"

export const SideBar = () => {
   return (
      <aside className='d-block justify-content-center align-content-center'>
         <Bar />
      </aside>
   );
}

const Bar = () => {
   const [open, setOpen] = useState(false);

  const handleCollapse = () => setOpen(prev => !prev);

  return (
    <article className="text-center">

      {/* Botón y herramienta */}
      <div className="d-inline-flex gap-2 ms-2 mt-1 align-items-center">
        <button 
          type="button"
          className="btn bg-primary text-white px-3"
          onClick={handleCollapse}
        >
          <i className={`fa-solid ${open ? "fa-arrow-left" : "fa-arrow-right"}`}></i>
        </button>
      </div>

      {/* Contenido colapsable */}
      <section className={`ms-2 mt-3 h-100 content ${open ? "open" : "close"}`}>
        <BodyBar />
      </section>

    </article>
  );
}


const BodyBar = () => {
   const items = [
      { icon: "fa-solid fa-chart-area", label: "Metrics" },
      { icon: "fa-solid fa-user-tie", label: "Employee" },
      { icon: "fa-brands fa-black-tie", label: "Providers" },
      { icon: "fa-solid fa-boxes-stacked", label: "Products" },
      { icon: "fa-solid fa-handshake-angle", label: "Customers" },
      { icon: "fa-solid fa-cart-arrow-down", label: "Sale Orders" },
      { icon: "fa-solid fa-hand-holding-dollar", label: "Sales" }
   ]
   return (
      <ul className='list list-unstyled d-flex flex-column gap-2 ms-1 p-2'>
         {
            items.map((item, i) => (
               <li key={i} className='list-item px-2 px-2 rounded-4'>
                  <span className='d-flex align-items-center gap-3 mb-1 p-1'>
                  <i className={`fa-solid ${item.icon} fs-4`}></i>
                  <span className='menu-text'>{item.label}</span>
               </span>
               </li>
            ))
         }
      </ul>
   )
}
