import styled from 'styled-components'
import { mobile } from './../../reponsive'
export const Container = styled.div`
  height: 60vh;
  display: flex;
  background-color: #fcf5f5;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: '20vh' })}
`
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 10px;
  ${mobile({ fontSize: '24px' })}
`
export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center', fontSize: '14px' })}
`
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: '80%' })}
`
export const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  font-size: 20px;
  padding-left: 20px;
  ${mobile({ fontSize: '14px' })}
`
export const Button = styled.button`
  background-color: teal;
  border: none;
  height: 100%;
  flex: 1;
  cursor: pointer;
  color: white;
`
