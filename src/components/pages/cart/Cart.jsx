import React, { useContext } from 'react'
import { ShopContext } from '../../../context/shop-context'
import { Products } from '../../../data/data'
import { CartItem } from '../../helpers/cart/CartItem'
import { CartContainer } from './CartStyle'

export const Cart = () => {
  const { cart, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  


  return (
    <CartContainer>
      <>
        <div className={totalAmount ? 'titleCard' : 'titleCartMargin'}>
          {totalAmount ? (
            <h1 className="cart">Carrinho</h1>
          ) : (
            <h1 className="emptyCart">Seu carrinho esta vazio</h1>
          )}
        </div>
        {totalAmount ? (
          <>
            <div className="prodQuantyTotal">
              <p>produto</p>
              <p className="quantity">quantidade</p>
              <p>total</p>
            </div>
            <div className="productsCart">
              {Products.map(product => {
                if (cart[product.id] !== 0) {
                  return <CartItem key={product.id} data={product} />
                }
              })}
            </div>
            <div className="total">
              <div className="totalAndCkeckout">
                <h2>Total: R${totalAmount},00</h2>
                <button>Finalizar compra</button>
              </div>
            </div>
          </>
        ) : (
          <div className="buyWithUs">
            <button>Compre nossos produtos</button>
          </div>
        )}
      </>
    </CartContainer>
  )
}
