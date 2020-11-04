import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { LoginStyle } from '../../styles'

import { SignIn } from '../../services/requests/Auth'

import Input from '../../Components/Input/Input'

const Login = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const efetuarLogin = async () => {
    try {
      const response = await SignIn(user)
      localStorage.setItem('@covid19/token', response.data.token)
      console.log('AAAAAAAAAA', response)
      props.onHandleSetUser(response.data.user)
      //window.location.reload()
    } catch (error) {
      Swal.fire({
        title: 'Login Inválido',
        text: 'Campo Email e Senha não conferem',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  }
  const checkData = () => {
    if (user.email === '' && user.password === '') {
      Swal.fire({
        title: 'Campos Invalidos',
        text: 'Campo Email e Senha não podem ser vazios',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    } else if (user.email === '') {
      Swal.fire({
        title: 'Email Invalido',
        text: 'Campo Email não pode ser vazio',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    } else if (user.password === '') {
      Swal.fire({
        title: 'Senha Invalido',
        text: 'Campo Senha não pode ser vazio',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    } else if (user.email.length <= 3) {
      Swal.fire({
        title: 'Email Invalido',
        text: 'Campo Email não pode ser menor que 4 caracteres',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    } else if (user.password <= 3) {
      Swal.fire({
        title: 'Senha Invalido',
        text: 'Campo Senha não pode ser menor que 4 caracteres',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  }

  return (
    <LoginStyle>
      <Input
        hint='Digite seu email...'
        type='email'
        label='email'
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      ></Input>
      <Input
        hint='Senha...'
        type='password'
        label='Senha'
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      ></Input>
      <Input
        type='submit'
        value='Acessar'
        onClick={() => {
          efetuarLogin()
          checkData()
        }}
      ></Input>
    </LoginStyle>
  )
}

export default Login
