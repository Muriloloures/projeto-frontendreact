import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cart, ContainerNav, Links } from './NavigationStyle'
import logo from '../../assets/logo-space.webp'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { ShopContext } from '../../context/shop-context'

export const Navigation = () => {
  const { cartLength, carrito } = useContext(ShopContext)
  const length = cartLength()

  return (
    <div>
      <ContainerNav>
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link to="/male">
            <Links>Homens</Links>
          </Link>
          <Link to="/female">
            <Links>Mulheres</Links>
          </Link>
          <Link to="kids">
            <Links>Crianças</Links>
          </Link>
        </div>
        <div>
          <Link to="/search">
            <Links>
              <span className="search">pesquisar</span>
            </Links>
          </Link>
          <Link to="/cart">
            <Cart>
              <span>{<AiOutlineShoppingCart />}</span>
              <span className="length">({length})</span>
            </Cart>
          </Link>
        </div>
      </ContainerNav>
    </div>
  )
}
