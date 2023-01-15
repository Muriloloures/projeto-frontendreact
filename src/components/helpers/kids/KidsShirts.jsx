import React from 'react'
import { ContainerKids } from './KidsShirtsStyle'
import { useContext } from 'react'
import { ShopContext } from '../../../context/shop-context'

export const KidsShirts = ({ product }) => {
  const { cart, addToCart } = useContext(ShopContext)

  const cartItemAmount = cart[product.id]

  return (
    <ContainerKids>
      <img src={product.image} alt="product" />

      <div className="information">
        <p>{product.name}</p>
        <p>R${product.price},00</p>
      </div>
      <button onClick={() => addToCart(product.id)}>
        Adicionar ao carrinho {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </ContainerKids>
  )
}
