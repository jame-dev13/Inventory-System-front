import React from 'react'
import { Pane } from './Pane'

export const ProductsPane = () => {
   const columns = ["id", "name", "price", "stock", "action"]
   const data = [
      { "id": 1, "name": "Producto 1", "price": 100, "stock": 50}]
  return (
    <Pane columns={columns} data={data} />
  )
}
