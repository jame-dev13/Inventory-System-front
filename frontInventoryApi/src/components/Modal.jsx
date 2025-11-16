import React from 'react'
import "./styles/modal.css"


export const Modal = ({ id, title = "title",
   body = <div>body</div>,
   onClick = () => { } }) => {

   return (
      <>
         <div className="modal fade modal" id={id} tabIndex="-1">
            <div className="modal-dialog">
               <div className="modal-content bg-secondary">
                  <div className="modal-header">
                     <h5 className="modal-title">{title}</h5>
                     <button className="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  <div className="modal-body">
                     {body}
                  </div>

                  <div className="modal-footer">
                     <button className='save bg-gradient'
                        onClick={onClick}>
                        <i className="fa-solid fa-check"></i>
                     </button>
                     <button type='button'
                        data-bs-dismiss="modal"
                        className='close bg-gradient'>
                        <i className="fa-solid fa-xmark"></i>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
