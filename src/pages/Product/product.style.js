import styled from 'styled-components'
export const Container = styled.div``
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`
export const ImgContainer = styled.div`
  flex: 1;
`
export const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`
export const Title = styled.h1`
  font-weight: 200;
`
export const Desc = styled.p`
  margin: 20px 0px;
`
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
export const Filter = styled.div`
  display: flex;
  align-items: center;
`
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 20px;
`
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 5px;
  cursor: pointer;
`
export const FilterSize = styled.select`
  cursor: pointer;
`
export const FilterOption = styled.option``
export const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`
export const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f8f4ff;
  }
`
