import React from 'react'
import { Pane } from './Pane'

export const CustomersPane = () => {
   const columns = [ 'id', 'name', 'email','phone', 'address'];
   const data = [
      { id: 1, name: 'John Doe', email: 'johnDoe@mail.com', phone: '555-1234', address: '123 Main St' }
   ]; 
   return (
      <Pane columns={columns} data={data}/>
   )
}
