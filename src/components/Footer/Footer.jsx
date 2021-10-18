import React from 'react'
import * as S from './footer.style'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import PersonIcon from '@mui/icons-material/Person'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
const Footer = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Logo>BEA.</S.Logo>
        <S.Desc>Lorem ipsum dolor sit amet</S.Desc>
        <S.SocialContainer>
          <S.SocialIcon bg={'#1877F2'}>
            <FacebookOutlinedIcon />
          </S.SocialIcon>
          <S.SocialIcon bg={'#DB0039'}>
            <InstagramIcon />
          </S.SocialIcon>
          <S.SocialIcon bg={'#1C9CEA'}>
            <TwitterIcon />
          </S.SocialIcon>
          <S.SocialIcon bg={'#C62026'}>
            <PinterestIcon />
          </S.SocialIcon>
        </S.SocialContainer>
      </S.Left>
      <S.Center>
        <S.Title>Useful Links</S.Title>
        <S.List>
          <S.ListItem>Home</S.ListItem>
          <S.ListItem>Cart</S.ListItem>
          <S.ListItem>Man Fashion</S.ListItem>
          <S.ListItem>Woman Fashion</S.ListItem>
          <S.ListItem>Accessories</S.ListItem>
          <S.ListItem>My Account</S.ListItem>
          <S.ListItem>Order Tracking</S.ListItem>
          <S.ListItem>Wishlist</S.ListItem>
        </S.List>
      </S.Center>
      <S.Right>
        <S.Title>Contact</S.Title>
        <S.ContactItem>
          <PersonIcon style={{ marginRight: '10px' }} />
          By Kien Nguyen
        </S.ContactItem>
        <S.ContactItem>
          <PhoneIcon style={{ marginRight: '10px' }} />
          +84 329043512
        </S.ContactItem>
        <S.ContactItem>
          <EmailIcon style={{ marginRight: '10px' }} />
          +nkien5770@gmail.com
        </S.ContactItem>
        <S.Payment src="https://th.bing.com/th/id/R.3b4d8519e606ab343119f65f4dbf6c94?rik=ScHdmWbvIvBl2g&pid=ImgRaw&r=0" />
      </S.Right>
    </S.Container>
  )
}

export default Footer
