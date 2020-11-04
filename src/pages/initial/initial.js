import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import Header from '../../Containers/Header/header'
import Body from '../../Containers/Body/Body'

import './initial.css'

const Initial = () => {
  //verify if the user is logged
  const [logged, setLogged] = useState(false)

  const [user, setUser] = useState({})

  const onHandleSetUser = (user) => {
    setUser(user)
  }

  useEffect(() => {
    if (localStorage.getItem('@covid19/token') !== null) {
      setLogged(true)
    }
  }, [])

  const allowClick = () => {
    if (logged === false) {
      Swal.fire({
        title: 'Usuário não está logado',
        text: 'Por favor, faça o login antes de Continuar',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  }

  function logout() {
    localStorage.removeItem('@covid19/token')
    setUser(null)
  }

  //output in console
  console.log('ta logado? ->', logged)

  return (
    <div>
      <Header
        isLogged={!!user}
        onHandleSetUser={onHandleSetUser}
        logout={logout}
      ></Header>
      <Body
        onClick={!!user}
        isLogged={!!user}
        isAdmin={user?.admin}
        userId={user?.id}
      ></Body>
    </div>
  )
}

export default Initial
