import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import * as S from './productList.style'
import Announcement from './../../components/Announcement/Announcement'
import Products from './../../components/Products/Products'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from './../../components/Footer/Footer'
const ProductList = () => {
  return (
    <S.Container>
      <Navbar />
      <Announcement title="Super Deal! Free Shipping on Order Over $50 " />
      <S.Title>Dresses</S.Title>
      <S.FilterContainer>
        <S.Filter>
          <S.FilterText>Filter Products:</S.FilterText>
          <S.Select>
            <S.Option disabled selected>
              Color
            </S.Option>
            <S.Option>White</S.Option>
            <S.Option>Black</S.Option>
            <S.Option>Red</S.Option>
            <S.Option>Blue</S.Option>
            <S.Option>Yellow</S.Option>
            <S.Option>Green</S.Option>
          </S.Select>
          <S.Select>
            <S.Option disabled selected>
              Size
            </S.Option>
            <S.Option>XS</S.Option>
            <S.Option>S</S.Option>
            <S.Option>M</S.Option>
            <S.Option>L</S.Option>
            <S.Option>XL</S.Option>
          </S.Select>
        </S.Filter>
        <S.Filter>
          <S.FilterText>Sort Products:</S.FilterText>
          <S.Select>
            <S.Option selected>Newest</S.Option>
            <S.Option>Price (asc)</S.Option>
            <S.Option>Price (desc)</S.Option>
          </S.Select>
        </S.Filter>
      </S.FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </S.Container>
  )
}

export default ProductList
