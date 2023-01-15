import React from 'react'
import { ContainerFemale } from './FemaleShirtStyle'
import { useContext } from 'react'
import { ShopContext } from '../../../context/shop-context'

export const FemaleShirts = ({ product }) => {
  const { cart, addToCart } = useContext(ShopContext)

  const cartItemAmount = cart[product.id]
  return (
    <ContainerFemale>
      <img src={product.image} alt="product" />

      <div className="information">
        <p>{product.name}</p>
        <p>R${product.price},00</p>
      </div>
      <button onClick={() => addToCart(product.id)}>
        Adicionar ao carrinho {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </ContainerFemale>
  )
}
