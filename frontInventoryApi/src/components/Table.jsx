import React from 'react'

export const Table = ({ columns = {}, data = {} }) => {
   return (
      <table className='table table-dark table-success table-hover'>
         <THead columns={columns} />
         <TBody data={data} />
      </table>
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

const TBody = ( {data = {}} ) => {
   return(
      <tbody>
         <tr>
            {Object.keys(data).map((key, i) => (
               <td key={i}>{data[key]}</td>
            ))}
            <td className=''>
               <button type="button" className='btn btn-outline-info mx-2'>
                  <i className="fa-regular fa-pen-to-square"></i>
               </button>
               <button type="button" className='btn btn-outline-danger'>
                  <i className="fa-regular fa-trash-can"></i>
               </button>
            </td>
         </tr>
      </tbody>
   )
}