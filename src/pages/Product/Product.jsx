import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import * as S from './product.style'
import Announcement from './../../components/Announcement/Announcement'
import Newsletter from './../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
const Product = () => {
  return (
    <S.Container>
      <Navbar />
      <Announcement title="Super Deal! Free Shipping on Order Over $50 " />
      <S.Wrapper>
        <S.ImgContainer>
          <S.Img src="https://product.hstatic.net/1000370106/product/3.1_55b15ad82845413fbf29b7203e9edaf2_master.jpg"></S.Img>
        </S.ImgContainer>
        <S.InfoContainer>
          <S.Title>Dresses</S.Title>
          <S.Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit</S.Desc>
          <S.Price>$ 20</S.Price>
          <S.FilterContainer>
            <S.Filter>
              <S.FilterTitle>Color:</S.FilterTitle>
              <S.FilterColor color="black"></S.FilterColor>
              <S.FilterColor color="darkblue"></S.FilterColor>
              <S.FilterColor color="gray"></S.FilterColor>
            </S.Filter>
            <S.Filter>
              <S.FilterTitle>Size:</S.FilterTitle>
              <S.FilterSize>
                <S.FilterOption>XS</S.FilterOption>
                <S.FilterOption>S</S.FilterOption>
                <S.FilterOption>M</S.FilterOption>
                <S.FilterOption>L</S.FilterOption>
                <S.FilterOption>XL</S.FilterOption>
              </S.FilterSize>
            </S.Filter>
          </S.FilterContainer>
          <S.AddContainer>
            <S.AmountContainer>
              <RemoveIcon style={{ cursor: 'pointer' }} />
              <S.Amount>1</S.Amount>
              <AddIcon style={{ cursor: 'pointer' }} />
            </S.AmountContainer>
            <S.Button>ADD TO CART</S.Button>
          </S.AddContainer>
        </S.InfoContainer>
      </S.Wrapper>
      <Newsletter />
      <Footer />
    </S.Container>
  )
}

export default Product
