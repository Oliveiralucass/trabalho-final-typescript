import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './Perfil.styled';
import { FiGithub } from 'react-icons/fi';
import { BsFolder2Open } from 'react-icons/bs';
import { SlNote } from 'react-icons/sl';
import { CiLocationOn } from 'react-icons/ci';
import { SlUserFollow } from 'react-icons/sl';
import { SlUserFollowing } from 'react-icons/sl';



export const Perfil:React.FC = () => {

  const [usuario, setUsuario] = useState<any>([]);
  const [projetos, setProjetos] = useState<any>([]);

  const { user } = useParams();

  const getApi = () =>{
    axios.get(`https://api.github.com/users/${user}`, {})
    .then(response => {
      setUsuario(response.data);
    })
    .catch(error => console.log(error));
  }

  const getApiRepo = () =>{
    axios.get(`https://api.github.com/users/${user}/repos`, {})
    .then(response => {
      setProjetos(response.data)
    })
    .catch(error => console.log(error));
  }

  useEffect(()=>{
      console.log(usuario);
      getApi();
      getApiRepo();
  }, []);


  return (
    <Container>
      <div className='usuarioContainer'>
        <div>
            <div className='perfilContainer'>
              <div>
                <p>Nome:</p>
                <h1>{usuario.name}</h1>
              </div>
            </div>
            <div className='infoContainer'>
              <div>
                <SlNote fill='white'size={20}/><p>{usuario.bio? usuario.bio : `Sem descrição`}</p>
              </div>
              <div>
                <CiLocationOn fill='white'size={20}/><p>{usuario.location? usuario.location : `Localização não informada`}</p>
              </div>
              <div className='seguidoresContainer'>
                <div>
                  <SlUserFollow fill='white'size={20}/><p>{usuario.followers}</p><p>seguidores</p>
                </div>
                <div>
                  <SlUserFollowing fill='white'size={20}/><p>{usuario.following}</p><p>Seguindo</p>
                </div>
              </div>
            </div>
        </div>        
        <div>
          <img src={usuario.avatar_url} alt="imagem-perfil" />
        </div>
      </div>
      <div className='repoContainer'>
        <h3>Respositórios</h3>
        <div className='containerCardsGeral'>
          {projetos.map((el: any)=>{
           return( 
              <li key={el.id} className='cardContainer'>
                <div className='iconContainer'>
                <BsFolder2Open fill='white'size={30}/>
                <FiGithub fill='white'size={30}/>
                </div>
                <p>{el.name}</p>
                <p>{el.description? el.description : `Nenhuma descrição`}</p>
                <p>{el.language? el.language : `Sem informações`}</p> 
              </li>
           )
          })}
        </div>
      </div>
    </Container>
  )
}
