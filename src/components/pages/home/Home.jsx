import React from 'react'
import { HomeContainer, ProductsExibition, Section } from './HomeStyle'
import imgHome from '../../../assets/homepage-img.webp'
import { featuredProducts } from '../../../data/data'
import { FeatProduct } from '../../helpers/FeatProduct/FeatProduct'
import occupyMartFemale from '../../../assets/mart-occupy-female.png'
import littleFalcon from '../../../assets/little-falcon.png'
import falconHat from '../../../assets/falcon-hat.png'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <h1>Shop Spacex</h1>
        <img src={imgHome} alt="Home page" />
      </HomeContainer>
      <Section>
        <div className="featuredTitle">
          <h1>produtos em destaque</h1>
        </div>
        <div className="featuredProduct">
          {featuredProducts.map(product => (
            <FeatProduct key={product.id} product={product} />
          ))}
        </div>
        <div className="featuredbutton">
          <button>VER TODOS OS DESTAQUES</button>
        </div>
      </Section>
      <ProductsExibition>
        <div>
          <img src={occupyMartFemale} alt="occupy mart female" />
          <Link to='/female'>
            <button>
              <span className="genre">mulheres</span>
              <span>ver produtos</span>
            </button>
          </Link>
        </div>
        <div>
          <img src={littleFalcon} alt="little falcon" />
          <Link to="/male">
            <button>
              <span className="genre">homens</span>
              <span>ver produtos</span>
            </button>
          </Link>
        </div>
        <div>
          <img src={falconHat} alt="falcon hat" />
          <button>
            <span className="genre">acessórios</span>
            <span>ver produtos</span>
          </button>
        </div>
      </ProductsExibition>
    </>
  )
}
