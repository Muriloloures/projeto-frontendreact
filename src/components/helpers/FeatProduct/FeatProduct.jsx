import React from 'react'
import { FeatProductContainer } from './FeatProductStyle'

export const FeatProduct = ({ product }) => {

  return (
    <FeatProductContainer>
      <img src={product.image} alt="product"/>

      <div className="information">
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    </FeatProductContainer>
  )
}
