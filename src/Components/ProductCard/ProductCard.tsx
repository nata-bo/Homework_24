import React from 'react'
interface Props{
    products:{
        name:string,
        price:string,
        weight:string
    }[];
    index:number
}

export default function ProductCard({products,index}:Props):JSX.Element {
  return (
    <div>
      <h1>{products[index].name}</h1>
      <h2>Weight: {products[index].weight}</h2>
      <h2>Price: {products[index].price}</h2>
    </div>
  )
}
