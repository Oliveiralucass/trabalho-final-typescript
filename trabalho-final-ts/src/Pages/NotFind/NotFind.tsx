import React from 'react'
import { Container } from './NotFind.styled'
import { TbFaceIdError } from 'react-icons/tb';


export const NotFind = () => {
  return (
    <Container>
      <main>
        <h1> <TbFaceIdError size={80} /></h1>
        <h1>404</h1>
        <p>Essa página não foi encontrada</p>
    </main>


    </Container>
  )
}
