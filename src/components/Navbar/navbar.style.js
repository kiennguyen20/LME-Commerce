import styled from 'styled-components'
import { mobile } from '../../reponsive'
export const Container = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  background-color: white;
  ${mobile({ height: '50px' })}
`
export const Wrapper = styled.div`
  padding: 10px 30px;
  height: calc(100%-20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px 10px 5px' })}
`
export const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  ${mobile({ marginLeft: '5px' })}
`
export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  ${mobile({ width: '50px' })}
`
export const Center = styled.div`
  flex: 1;
  text-align: center;
`
export const Logo = styled.h1`
  font-weight: bold;
  letter-spacing: 2px;
  ${mobile({ fontSize: '24px', letterSpacing: '0.5px' })}
`
export const Img = styled.img`
  width: 40px;
  height: 100%;
  margin-right: 10px;
  ${mobile({ marginRight: '5px', height: '80%' })}
`
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: '2', justifyContent: 'center' })}
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`
