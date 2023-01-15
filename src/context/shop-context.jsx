import { createContext, useEffect, useState } from 'react'
import { Products } from '../data/data'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}



export const ShopContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false)

  const [cart, setCart] = useState(getDefaultCart())
  
  
  
  const addToCart = itemId => {
    setCart(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeFromCart = itemId => {
    setCart(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }
  const removeFromCartAll = itemId => {
    setCart(prev => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCart(prev => ({ ...prev, [itemId]: newAmount }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = Products.find(product => product.id === Number(item))
        totalAmount += cart[item] * itemInfo.price
      }
    }

    return totalAmount
  }


  const cartLength = () => {
    let totalAmount = 0
    for (const item in cart) {
      if (cart[item] > 0) {
        totalAmount += cart[item]
      }
    }

    return totalAmount
  }


  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    openModal,
    setOpenModal,
    cartLength,
    removeFromCartAll
  }

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  )
}
