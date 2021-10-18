import styled from 'styled-components'
import { mobile } from './../../reponsive'
export const Container = styled.div`
  padding: 20px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${mobile({ display: 'none' })}
`
