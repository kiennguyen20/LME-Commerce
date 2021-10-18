import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './../Register/register.style'
import InputText from '../InputText/InputText'
import InputPassword from '../InputPassword/InputPassword'
const Login = () => {
  return (
    <S.FormWrapper>
      <S.FormTitle>Đăng Nhập</S.FormTitle>
      <S.Form noValidate>
        <S.FormControl>
          <InputText placeholder="Email" type="email" name="email" />
        </S.FormControl>
        <S.FormControl>
          <InputPassword placeholder="Password" type="password" name="password" />
        </S.FormControl>

        <S.FormButton>
          <S.Button>Đăng Nhập</S.Button>
        </S.FormButton>
      </S.Form>
      <S.FormFooter>
        <span>Bạn mới biết đến BEA. ?</span>
        {/* <Link to="" className="link">
            Đăng Nhập
          </Link> */}
      </S.FormFooter>
    </S.FormWrapper>
  )
}

export default Login
