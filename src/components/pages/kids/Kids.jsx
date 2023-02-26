import React, { useState } from 'react';
import { KidsContainer } from './KidsStyle';
import { Products } from '../../../data/data';
import { KidsShirts } from '../../helpers/kids/KidsShirts';

export const Kids = () => {
  const [minimo, setMinimo] = useState(null);
  const [maximo, setMaximo] = useState(null);
  const [ordenacao, setOrdenacao] = useState('');

  const KidsProducts = Products.slice(23, 33)
    .filter((product) => {
      if (minimo && maximo) {
        return product.price >= minimo && product.price <= maximo;
      } else if (minimo) {
        return product.price >= minimo;
      } else if (maximo) {
        return product.price <= maximo;
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      if (ordenacao === 'nome') {
        return a.name.localeCompare(b.name);
      } else {
        return 0;
      }
    });

  const handleMinimoChange = (event) => {
    setMinimo(event.target.value);
  };

  const handleMaximoChange = (event) => {
    setMaximo(event.target.value);
  };

  const handleOrdenacaoChange = (event) => {
    setOrdenacao(event.target.value);
  };

  return (
    <KidsContainer>
      <h1>Camisetas Infantis</h1>
      <div className='filters'>
        <div>
          <label htmlFor="minimo">Valor mínimo:</label>
          <input
            id="minimo"
            type="number"
            placeholder="Valor mínimo"
            onChange={handleMinimoChange}
            value={minimo || ''}
          />
        </div>
        <div>
          <label htmlFor="maximo">Valor máximo:</label>
          <input
            id="maximo"
            type="number"
            placeholder="Valor máximo"
            onChange={handleMaximoChange}
            value={maximo || ''}
          />
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
        {KidsProducts.map((product) => (
          <KidsShirts product={product} key={product.id} />
        ))}
      </div>
    </KidsContainer>
  );
};
