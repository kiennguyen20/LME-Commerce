import React, { useState } from 'react'
import * as S from './slider.style'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { sliderItems } from '../../data'
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <S.Container>
      <S.Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftIcon />
      </S.Arrow>
      <S.Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <S.Slide bg={item.bg} key={item.id}>
            <S.ImgContainer>
              <S.Image src={item.img} />
            </S.ImgContainer>
            <S.InfoContainer>
              <S.Title>{item.title}</S.Title>
              <S.Desc>{item.desc}</S.Desc>
              <S.Button>SHOP NOW</S.Button>
            </S.InfoContainer>
          </S.Slide>
        ))}
      </S.Wrapper>
      <S.Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightIcon />
      </S.Arrow>
    </S.Container>
  )
}

export default Slider
