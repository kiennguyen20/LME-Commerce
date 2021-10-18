import React from 'react'
import * as S from './product.style'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
const Product = ({ product }) => {
  return (
    <S.Container>
      <S.Image src={product.img}></S.Image>
      <S.Info>
        <S.Icon>
          <ShoppingCartOutlinedIcon />
        </S.Icon>
        <S.Icon>
          <SearchOutlinedIcon />
        </S.Icon>
        <S.Icon>
          <FavoriteBorderOutlinedIcon />
        </S.Icon>
      </S.Info>
    </S.Container>
  )
}

export default Product
