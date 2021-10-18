import React from 'react'
import * as S from './newsletter.style'
import SendIcon from '@mui/icons-material/Send'
const Newsletter = () => {
  return (
    <S.Container>
      <S.Title>Newsletter</S.Title>
      <S.Desc>Lorem ipsum dolor sit amet, consectetur adip</S.Desc>
      <S.InputContainer>
        <S.Input placeholder="Your email...."></S.Input>
        <S.Button>
          <SendIcon />
        </S.Button>
      </S.InputContainer>
    </S.Container>
  )
}

export default Newsletter
