import React from 'react'
import * as S from './navbar.style'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Badge } from '@mui/material'
const Navbar = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <S.Img src="https://png2.cleanpng.com/sh/28dcff267bcc639137ca633721af3d66/L0KzQYm3U8I5N5p0iZH0aYP2gLBuTfNpaZ9qhJ91b3fyPbfokBhqd58ye95ycD3kgsW0gBhidpZxRadqYnOzdITsUME2OZI9RqY9M0S5Roq8UcUzOmM8S6cEOECzRYW1kP5o/kisspng-chanel-logo-fashion-clip-art-chanel-5abc0d3e0151a8.4434669515222735980054.png"></S.Img>
          <S.Logo>BEA.</S.Logo>
        </S.Left>
        <S.Center>
          <S.SearchContainer>
            <S.Input placeholder="Search"></S.Input>
            <SearchIcon style={{ color: 'gray', fontSize: '16px', cursor: 'pointer' }} />
          </S.SearchContainer>
        </S.Center>
        <S.Right>
          <S.MenuItem>REGISTER</S.MenuItem>
          <S.MenuItem>SIGN IN</S.MenuItem>
          <S.MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </S.MenuItem>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  )
}

export default Navbar
