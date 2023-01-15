import React, {useContext} from 'react'
import { FilteredContainer } from './FilteredStyle'
import { ShopContext } from '../../../context/shop-context'

export const Filtered = ({data}) => {
  const {cart, addToCart} = useContext(ShopContext)

  const cartItemAmount = cart[data.id]

  return (
    <FilteredContainer>
      <img src={data.image} alt={data.name} />
      <div className='information'>
        <p>{data.name}</p>
        <p>R${data.price}, 00</p>
      </div>
      <button onClick={() => addToCart(data.id)}>Adicionar ao carrinho {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </FilteredContainer>
  )
}
