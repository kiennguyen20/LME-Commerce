import styled from 'styled-components'
import { mobile } from './../../reponsive'

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
`
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  color: gray;
  border: none;
  font-weight: 600;
  cursor: pointer;
`
