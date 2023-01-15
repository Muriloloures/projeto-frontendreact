import React, { useState } from 'react'
import { SearchContainer } from './SearchStyle'
import { Products } from '../../../data/data'
import { Filtered } from '../../helpers/filtered/Filtered'

export const Search = () => {
  const [search, setSearch] = useState('')
  console.log(search)
  const filteredProduct = Products.filter(data => data.name.includes(search))
  console.log(filteredProduct)

  return (
    <SearchContainer>
      <div className="input">
        <input
          onChange={e => setSearch(e.target.value.toLowerCase())}
          type="text"
          placeholder="PROCURAR..."
        />
      </div>
      <div className={search ? 'container' : 'containerNotFound'}>
        <div className="title">
          <h1>{search ? filteredProduct.length : '0'} Produto(s) encontrado(s)</h1>
        </div>
        <div>
          {search && (
            <div className="productsOrNotFound">
              {filteredProduct.map(data => (
                <Filtered key={data.id} data={data} />
              ))}
            </div>
          )}
        </div>
      </div>
    </SearchContainer>
  )
}
