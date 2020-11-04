import React, { useState } from 'react'

import {
  DivContainer,
  DivDisplayFixed,
  DivDisplayDynamic,
  DivInfo,
  DisplayTitle,
  DisplayContent,
  DivInsertMessage,
} from '../../styles'

import Swal from 'sweetalert2'

import { addMessage } from '../../services/requests/Message'

import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import GlobalRequest from '../../data/GlobalRequest/GlobalRequest'
import CountryRequest from '../../data/CountryRequest/CountryRequest'

const Body = (props) => {
  const [message, setMessage] = useState({
    title: '',
    message: '',
  })

  const efetuarPost = async () => {
    try {
      if (props.userId) {
        const response = await addMessage({ ...message, userId: props.userId })
        console.log('AAAAAARESP', response)
      }
    } catch (error) {
      Swal.fire({
        title: 'Postagem Inválida',
        text: 'Titulo ou Texto inválidos',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  }

  return (
    <DivContainer {...props}>
      <div>
        <DivDisplayFixed>
          <GlobalRequest></GlobalRequest>
          <CountryRequest searchType='static'></CountryRequest>
        </DivDisplayFixed>
        <DivDisplayDynamic>
          <CountryRequest
            searchType='dynamic'
            isLogged={props.isLogged}
          ></CountryRequest>
        </DivDisplayDynamic>
      </div>
      <DivInfo>
        <DivInsertMessage>
          <Input label='Titulo'></Input>
          <Button text='Pesquisar' typeBtn='btnRed' class='btnGreen'></Button>
        </DivInsertMessage>

        {props.isAdmin && (
          <DivInsertMessage>
            <Input
              label='Titulo'
              onChange={(e) =>
                setMessage({ ...message, title: e.target.value })
              }
            ></Input>
            <Input
              label='Mensagem'
              onChange={(e) =>
                setMessage({ ...message, message: e.target.value })
              }
            ></Input>
            <Button
              text='enviar'
              typeBtn='btnRed'
              class='btnGreen'
              onClick={efetuarPost}
            ></Button>
          </DivInsertMessage>
        )}
        <DisplayTitle>Diminuição no numeros de casos no brasil</DisplayTitle>
        <DisplayContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos
          nostrum minus qui? Vero eligendi corrupti voluptatem, alias inventore
          voluptates.
        </DisplayContent>
      </DivInfo>
    </DivContainer>
  )
}

export default Body
