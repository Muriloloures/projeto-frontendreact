import React, { useState } from 'react'
import { MaleContainer } from './MaleStyle'
import { Products } from '../../../data/data'
import { MaleShirts } from '../../helpers/male/MaleShirts'

export const Male = () => {
  const [minimo, setMinimo] = useState(null)
  const [maximo, setMaximo] = useState(null)
  const [ordenacao, setOrdenacao] = useState('')

  const MaleProducts = Products.slice(0, 13).filter(product => {
    if (minimo && maximo) {
      return product.price >= minimo && product.price <= maximo
    } else if (minimo) {
      return product.price >= minimo
    } else if (maximo) {
      return product.price <= maximo
    } else {
      return true
    }
  }).sort((a, b) => {
    if (ordenacao === 'nome') {
      return a.name.localeCompare(b.name)
    } else {
      return 0
    }
  })

  const handleMinimoChange = (event) => {
    setMinimo(event.target.value)
  }

  const handleMaximoChange = (event) => {
    setMaximo(event.target.value)
  }

  const handleOrdenacaoChange = (event) => {
    setOrdenacao(event.target.value)
  }

  return (
    <MaleContainer>
      <h1>Camisetas Masculinas</h1>
      <div className='filters'>
        <div>
          <label htmlFor="minimo">Valor mínimo:</label>
          <input id="minimo" type="number" placeholder="Valor mínimo" onChange={handleMinimoChange} value={minimo || ''} />
        </div>
        <div>
          <label htmlFor="maximo">Valor máximo:</label>
          <input id="maximo" type="number" placeholder="Valor máximo" onChange={handleMaximoChange} value={maximo || ''} />
        </div>
        <div>
          <label htmlFor="ordenacao">Ordenar por:</label>
          <select id="ordenacao" onChange={handleOrdenacaoChange} value={ordenacao}>
            <option value="">Selecione</option>
            <option value="nome">Nome</option>
          </select>
        </div>
      </div>
      <div>
        {MaleProducts.map((product) => (
          <MaleShirts product={product} key={product.id} />
        ))}
      </div>
    </MaleContainer>
  )
}
