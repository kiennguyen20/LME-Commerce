import React from 'react'
import { popularProducts } from '../../data'
import * as S from './products.style'
import Product from './Product'
const Products = () => {
  return (
    <S.Container>
      {popularProducts.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </S.Container>
  )
}

export default Products
