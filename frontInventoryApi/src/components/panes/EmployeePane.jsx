import React from 'react'
import { Pane } from './Pane'
import { Modal } from '../Modal'

export const EmployeePane = () => {
   const columns = ["id", "name", "salary", "shift", "action"]
   const data = [
      { "id": 2, "name": "jose", "salary": 12000, "shift": "morning" }
   ]


   return (
      <>
         <Modal id="editModal" />
         <Pane columns={columns} data={data} />
      </>
   )
}


