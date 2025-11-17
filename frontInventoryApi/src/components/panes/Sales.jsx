import React from 'react'
import { Pane } from './Pane';

export const Sales = () => {
    const columns = ["id", "orders", "price", "date"];
    const data = [
        { id: 1, orders: 5, price: "$150", date: "2024-01-15" },
        { id: 2, orders: 3, price: "$90", date: "2024-01-16" },
        { id: 3, orders: 8, price: "$240", date: "2024-01-17" },
    ];
  return (
    <Pane columns={columns} data={data} />
  )
}
