import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {
  const {Products}=useContext(ShopContext);
  console.log(Products);
  return (
    <div>
      
    </div>
  )
}

export default LatestCollection
