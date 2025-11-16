import React from 'react'
import { NavBarPane } from '../NavBarPane'
import { Table } from '../Table'

export const EmployeePane = () => {
   const columns = ["id", "name", "salary", "shift", "action"]
   const data = JSON.parse(
   '{"id": 2, "name": "jose", "salary": 12000, "shift": "morning"}')

   return (
      <section className='d-flex flex-column gap-2'>
         <NavBarPane />
         <Table columns={columns} data={data} />
      </section>
   )
}


