import React from 'react'
import { Pane } from './Pane'

export const Orders = () => {
   const columns = ["id", "products", "customer", "total"];
   const data = [{ "id": 1, "products": ["product1", "product2"], "customer": "customer1", "total": 100 }];
   return (
      <Pane columns={columns} data={data} />
   )
}
