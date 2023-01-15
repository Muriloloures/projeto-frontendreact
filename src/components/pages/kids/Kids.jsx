import React from 'react'
import { KidsContainer } from './KidsStyle'
import { Products } from '../../../data/data'
import { KidsShirts } from '../../helpers/kids/KidsShirts'


export const Kids = () => {
  const KidsProducts = Products.slice(23, 33)


  return (
    <KidsContainer>
        <h1>Camisetas Masculinas</h1>
        <div>
          {KidsProducts.map(product => (
            <KidsShirts key={product.id} product={product} />
          ))}
        </div>
    </KidsContainer>
  )
}
