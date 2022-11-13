import { Container } from './NotFind.styled'
import { TbFaceIdError } from 'react-icons/tb';
import { Botao } from '../Perfil/Perfil.styled';
import {Link} from 'react-router-dom'

export const NotFind = () => {
  return (
    <Container>
      <main>
        <h1> <TbFaceIdError size={80} /></h1>
        <h1>404</h1>
        <p>Essa página não foi encontrada</p>
        <Link to={'/'}><Botao>Nova pesquisa</Botao></Link>
      </main>
    </Container>
  )
}