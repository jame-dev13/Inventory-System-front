import React from 'react'

import "./styles/table.css"

export const Table = ({ columns = {}, data = {} }) => {
   return (
      <div class="col p-0 overflow-scroll">
         <table class="table table-dark table-success table-hover table-bordered">
            <THead columns={columns} />
            <TBody data={data} />
         </table>
      </div>
   )
}

const THead = ({ columns = {} }) => {
   return (
      <thead>
         <tr>
            {columns.map((item, i) => (
               <th key={i}
                  scope='col'
                  className='text-capitalize'>{item}</th>
            ))}
         </tr>
      </thead>
   )
}

const TBody = ({ data = [] }) => {
   return (
      <tbody>
         {
            data.map((item, i) => (
               <tr key={i}>
                  <TableRow item={item} />
                  <td className='text-break align-middle text-center'>
                     <button type="button" className='btn btn-outline-info mx-2 my-1'
                        data-bs-target="#editModal" data-bs-toggle="modal">
                        <i className="fa-regular fa-pen-to-square"></i>
                     </button>
                     <button type="button" className='btn btn-outline-danger'>
                        <i className="fa-regular fa-trash-can"></i>
                     </button>
                  </td>
               </tr>
            ))
         }
      </tbody>
   )
}

const TableRow = ({ item = {} }) => {
   return (
      <>
         {Object.values(item).map((value, i) => (
            <td key={i} className='text-break align-middle text-center'>{value}</td>
         ))}
      </>
   )
}