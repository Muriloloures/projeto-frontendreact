import React, { useContext } from 'react'
import { ShopContext } from '../../../context/shop-context'
import { CartContainer } from './CartItemStyle'

export const CartItem = ({ data }) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    removeFromCartAll
  } = useContext(ShopContext)

  return (
    <CartContainer>
      <div className="imgAndPrice">
        <div>
          <img src={data.image} alt={data.name} />
        </div>
        <div>
          <div className="nameAndPrice">
            <p>{data.name}</p>
            <p className="color">{data.color}</p>
            <span className="price">R${data.price},00</span>
          </div>
        </div>
      </div>
      <div className="quantityAndTotal">
        <div className="inputAndButtons">
          <div>
            <button
              onClick={() => removeFromCart(data.id)}
              className="firstButton"
            >
              -
            </button>
            <input
              value={cart[data.id]}
              onChange={e =>
                updateCartItemCount(Number(e.target.value), data.id)
              }
            />
            <button onClick={() => addToCart(data.id)} className="secondButton">
              +
            </button>
          </div>
          <div>
            <button onClick={() => removeFromCartAll(data.id)} className="removeButton">Remover</button>
          </div>
        </div>
        <div className="boxTotal">
          <span className="price">R${data.price * cart[data.id]},00</span>
        </div>
      </div>
    </CartContainer>
  )
}
