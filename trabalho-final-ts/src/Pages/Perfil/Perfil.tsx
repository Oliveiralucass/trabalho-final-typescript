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
  const [projetos, setProjetos] = useState<string[]>([]);

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
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  useEffect(()=>{
      console.log(usuario);
      // getApi();
      // getApiRepo();
  }, []);


  const repositorios = [
    {
      'nomeRepositorio': 'site com react',
      'descricaoRepo': 'criado com react',
      'linguagens': 'react js',
      'id': 1
    },
    {
      'nomeRepositorio': 'site filmes',
      'descricaoRepo': 'criado com react',
      'linguagens': 'html css js',
      'id': 2
    },
    {
      'nomeRepositorio': 'site com react',
      'descricaoRepo': 'criado com react',
      'linguagens': 'react js'
    },
    {
      'nomeRepositorio': 'site com react',
      'descricaoRepo': 'criado com react',
      'linguagens': 'react js',
      'id': 3
    },
    {
      'nomeRepositorio': 'site com react',
      'descricaoRepo': 'criado com react',
      'linguagens': 'react js',
      'id': 4
    },
    {
      'nomeRepositorio': 'site com react',
      'descricaoRepo': 'criado com react',
      'linguagens': 'react js',
      'id': 5
    },
    
    {
      'nomeRepositorio': 'site com react',
      'descricaoRepo': 'criado com react',
      'linguagens': 'react js',
      'id': 6
    },
    
    {
      'nomeRepositorio': 'site com react',
      'descricaoRepo': 'criado com react',
      'linguagens': 'react js',
      'id': 7
    },
    
    {
      'nomeRepositorio': 'site com react',
      'descricaoRepo': 'criado com react',
      'linguagens': 'react js',
      'id': 8
    },
  ];

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
          <img src="data:image/jpeg;base64,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" alt="imagem-perfil" />
        </div>
      </div>
      <div className='repoContainer'>
        <h3>Respositórios</h3>
        <div className='containerCardsGeral'>
          {repositorios.map<any>(el=>{
           return( 
              <li key={el.id} className='cardContainer'>
                <div className='iconContainer'>
                <BsFolder2Open fill='white'size={30}/>
                <FiGithub fill='white'size={30}/>
                </div>
                <p>{el.nomeRepositorio}</p>
                <p>{el.descricaoRepo}</p>
                <p>{el.linguagens}</p> 
              </li>
           )
          })}
        </div>
      </div>
    </Container>
  )
}
