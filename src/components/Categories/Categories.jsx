import React from 'react'
import * as S from './categories.style'
import { categories } from '../../data'
import CategoryItem from './CategoryItem'
const Categories = () => {
  return (
    <S.Container>
      {categories.map(item => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </S.Container>
  )
}

export default Categories
