import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import * as S from './cart.style'
import Announcement from './../../components/Announcement/Announcement'
import Footer from './../../components/Footer/Footer'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
const Cart = () => {
  return (
    <S.Container>
      <Navbar />
      <Announcement title="Super Deal! Free Shipping on Order Over $50 " />
      <S.Wrapper>
        <S.Title>YOUR BAG</S.Title>
        <S.Top>
          <S.TopButton>CONTINUE SHOPPING</S.TopButton>
          <S.TopTexts>
            <S.TopText>Shopping Bag(2)</S.TopText>
            <S.TopText>Your Wishlist(0)</S.TopText>
          </S.TopTexts>
          <S.TopButton type="filled">CHECKOUT NOW</S.TopButton>
        </S.Top>
        <S.Bottom>
          <S.Info>
            <S.Product>
              <S.ProductDetail>
                <S.Image src="https://product.hstatic.net/1000370106/product/3.1_55b15ad82845413fbf29b7203e9edaf2_master.jpg" />
                <S.Details>
                  <S.ProductName>
                    <b>Product:</b>Dress
                  </S.ProductName>
                  <S.ProductId>
                    <b>ID:</b>0123456789
                  </S.ProductId>
                  <S.ProductColor color="black" />
                  <S.ProductSize>
                    <b>Size:</b>36.5
                  </S.ProductSize>
                </S.Details>
              </S.ProductDetail>
              <S.PriceDetail>
                <S.ProductAmountContainer>
                  <RemoveIcon />
                  <S.ProductAmount>2</S.ProductAmount>
                  <AddIcon />
                </S.ProductAmountContainer>
                <S.ProductPrice>$ 30</S.ProductPrice>
              </S.PriceDetail>
            </S.Product>
            <S.Hr />
            <S.Product>
              <S.ProductDetail>
                <S.Image src="https://product.hstatic.net/1000370106/product/3.1_55b15ad82845413fbf29b7203e9edaf2_master.jpg" />
                <S.Details>
                  <S.ProductName>
                    <b>Product:</b>Dress
                  </S.ProductName>
                  <S.ProductId>
                    <b>ID:</b>0123456789
                  </S.ProductId>
                  <S.ProductColor color="black" />
                  <S.ProductSize>
                    <b>Size:</b>36.5
                  </S.ProductSize>
                </S.Details>
              </S.ProductDetail>
              <S.PriceDetail>
                <S.ProductAmountContainer>
                  <RemoveIcon />
                  <S.ProductAmount>2</S.ProductAmount>
                  <AddIcon />
                </S.ProductAmountContainer>
                <S.ProductPrice>$ 30</S.ProductPrice>
              </S.PriceDetail>
            </S.Product>
          </S.Info>
          <S.Summary>
            <S.SummaryTitle>ORDER SUMMARY</S.SummaryTitle>
            <S.SummaryItem>
              <S.SummaryItemText>Subtotal</S.SummaryItemText>
              <S.SummaryItemPrice>$ 60</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText>Estimated Shipping</S.SummaryItemText>
              <S.SummaryItemPrice>$ 5</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText>Shipping Discount</S.SummaryItemText>
              <S.SummaryItemPrice>$ -5</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem type="total">
              <S.SummaryItemText>Total</S.SummaryItemText>
              <S.SummaryItemPrice>$ 60</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryButton>CHECKOUT NOW</S.SummaryButton>
          </S.Summary>
        </S.Bottom>
      </S.Wrapper>
      <Footer />
    </S.Container>
  )
}

export default Cart
