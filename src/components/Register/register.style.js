import styled from 'styled-components'

export const FormWrapper = styled.div`
  flex: 0 0 50%;
  max-width: 25%;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
  border-radius: 0% 2rem;
  background-color: #fff;
  padding: 3.5rem 3rem 5rem;
`

export const FormTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 2rem;
  color: #222;
  text-transform: capitalize;
`
export const Form = styled.form``

export const FormControl = styled.div`
  margin-bottom: 2rem;
`
export const FormButton = styled.div`
  margin-bottom: 3rem;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: teal;
  border-radius: 2px;
  border: 0;
  color: #fff;
  padding: 1px 6px;
  transition: 0.2s background ease;
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  opacity: 0.8;
  &:hover {
    background: teal;
    opacity: 1;
  }
  cursor: pointer;
`
export const FormFooter = styled.div`
  text-align: center;
  span {
    margin-right: 1rem;
    color: rgba(0, 0, 0, 0.26);
  }
`
