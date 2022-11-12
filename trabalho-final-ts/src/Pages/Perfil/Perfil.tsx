import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './Perfil.styled'


export const Perfil:React.FC = () => {

  const { id } = useParams()

  useEffect(()=>{
      console.log(id);
  }, [])

  return (
    <Container>
    <p>User id: {id}</p>
    </Container>
  )
}
