import React from 'react'

import { HeaderCustom } from '../../styles'
import VerifyLogin from '../../Components/VerifyLogin/VerifyLogin'

const Header = (props) => {
  return (
    <HeaderCustom>
      <h1>Casos de Covid 19 no Mundo</h1>
      <div style={{ zIndex: 99999 }}>
        <VerifyLogin
          logout={props.logout}
          onHandleSetUser={props.onHandleSetUser}
          logged={props.isLogged}
        ></VerifyLogin>
      </div>
    </HeaderCustom>
  )
}

export default Header
