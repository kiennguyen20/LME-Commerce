import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './register.style'
import InputText from './../InputText/InputText'
import InputPassword from './../InputPassword/InputPassword'
const Register = () => {
  return (
    <S.FormWrapper>
      <S.FormTitle>Đăng Ký</S.FormTitle>
      <S.Form noValidate>
        <S.FormControl>
          <InputText placeholder="Email" type="email" name="email" />
        </S.FormControl>
        <S.FormControl>
          <InputPassword placeholder="Password" type="password" name="password" />
        </S.FormControl>
        <S.FormControl>
          <InputPassword placeholder="Confirm Password" type="password" name="password" />
        </S.FormControl>
        <S.FormButton>
          <S.Button>Đăng Ký</S.Button>
        </S.FormButton>
      </S.Form>
      <S.FormFooter>
        <span>Bạn đã có tài khoản ?</span>
        {/* <Link to="" className="link">
            Đăng Nhập
          </Link> */}
      </S.FormFooter>
    </S.FormWrapper>
  )
}

export default Register
