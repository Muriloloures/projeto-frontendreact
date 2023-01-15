import React from 'react'
import { FemaleContainer } from './FemaleStyle'
import { Products } from '../../../data/data'
import { FemaleShirts } from '../../helpers/female/FemaleShirts'

export const Female = () => {

  const FemaleProducts = Products.slice(13, 23)

  return (
    <FemaleContainer>
      <h1>Camisetas Femininas</h1>
      <div>
        {FemaleProducts.map((product) => (
          <FemaleShirts product={product} />
        ))}
      </div>
    </FemaleContainer>
  )
}
