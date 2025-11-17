import React from 'react'
import { Pane } from './Pane'

export const ProviderPane = () => {
   const columns = ["id", "name", "contact", "action"]
   const data = [
      { "id": 1, "name": "Proveedor 1", "contact": "39933242"}]
   return (
      <Pane columns={columns} data={data}/>
   )
}
