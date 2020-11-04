import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

import { SignUp as Logon } from '../../services/requests/Auth'

import { SignUpStyle } from '../../styles'
import Input from '../../Components/Input/Input'

const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    admin: false,
  })

  const efetuarCadastro = async () => {
    try {
      const response = await Logon(user)
      //window.location.reload()
      console.log(response)
    } catch (error) {
      Swal.fire({
        title: 'Cadastro Inválido',
        text: 'Campos Inválidos',
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
    <SignUpStyle>
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
        hint='Nome...'
        type='text'
        label='Nome'
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      ></Input>
      <Input
        label='É admin'
        name='isGoing'
        type='checkbox'
        checked={user.admin}
        onChange={() => setUser({ ...user, admin: true })}
      />
      <Input
        type='submit'
        value='Cadastrar'
        onClick={() => {
          efetuarCadastro()
          checkData()
        }}
      ></Input>
    </SignUpStyle>
  )
}

export default SignUp
