import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Navigate, useParams } from 'react-router-dom';

export default function Products():JSX.Element {
    const products=[
        {
            name:'Bread',
            price:'3.00',
            weight:'500'
        },
        {
            name:'Butter',
            price:'2.50',
            weight:'2500'
        },
        {
            name:'Milk',
            price:'1.20',
            weight:'1000'
        },
        {
            name:'Apple',
            price:'1.00',
            weight:'500'
        },
        {
            name:'Banana',
            price:'2.00',
            weight:'1000'
        }

    ]

    const {productId} = useParams();
    if(Number(productId)>=products.length){
        return<Navigate to="/" />
    }
  return (
    <div>
    <ProductCard products={products} index={Number(productId)}/>
    </div>
  )
}
