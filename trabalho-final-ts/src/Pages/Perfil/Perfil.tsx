// import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Botao } from './Perfil.styled';
import { FiGithub } from 'react-icons/fi';
import { BsFolder2Open } from 'react-icons/bs';
import { SlNote } from 'react-icons/sl';
import { CiLocationOn } from 'react-icons/ci';
import { SlUserFollow } from 'react-icons/sl';
import { SlUserFollowing } from 'react-icons/sl';

export const Perfil:React.FC = () => {
  
  const [usuario, setUsuario] = useState<usuarioProps | undefined>(undefined);
  const [projetos, setProjetos] = useState<Array<mapProps>>([]);

  let [visibilidade, setVisibilidade] = useState<string>(`c-loader`);
  let [esconder, setEsconder] = useState<string>(`hide`);
  let [esconderRepo, setEscondoRepo] = useState<string>(`hide`);

  type usuarioProps = {
    name: string,
    bio: string,
    location: string,
    followers: number,
    following: number,
    avatar_url: string 
  }

  type mapProps = {
    id : number;
    name : string;
    description : string;
    language: string
  }

  const { user } = useParams();

  const api = {
    baseUrl: 'https://api.github.com/users/',
    baseUrlRepo: `https://api.github.com/users/${user}/repos`,
    clientId: 'c752c51d06785ca6309a',
    clientSecret: '3b95cacb7875bf317fdfaea051d698aba740e413'
    }

  const link = `${api.baseUrl}${user}?client_id=${api.clientId}?client_secret=${api.clientSecret}`

  const getApi = () =>{
    axios.get(`${link}`, {})
    .then(response => {
      console.log(response.data);
      setUsuario(response.data);
    })
    .catch(error => console.log(error));
  }

  const linkRepo = `${api.baseUrlRepo}?client_id=${api.clientId}?client_secret=${api.clientSecret}`

  const getApiRepo = () =>{
    axios.get(`${linkRepo}`, {})
    .then(response => {
      setProjetos(response.data);
      setVisibilidade(`hide`);
      setEsconder(`usuarioContainer`);
      setEscondoRepo(`repoContainer`);
    })
    .catch(error => console.log(error));
  }

  useEffect(()=>{
      getApi();
      getApiRepo();
  }, []);

  return (
    <>
      <Link to='/'><Botao>Nova Pesquisa</Botao></Link>
      <Container> 
        <div className={visibilidade}></div>     
      <div className={esconder}>
        <div>
            <div className='perfilContainer'>
              <div>
                <p>Nome:</p>
                <h1 data-testid="username">{usuario?.name? usuario.name : `Usuário não existe!`}</h1>
              </div>
            </div>
            <div className='infoContainer'>
              <div className='bioContainer'>
                <SlNote fill='white'size={20}/><p>{usuario?.bio? usuario.bio : `Sem descrição`}</p>
              </div>
              <div>
                <CiLocationOn fill='white'size={20}/><p>{usuario?.location? usuario.location : `Localização não informada`}</p>
              </div>
              <div className='seguidoresContainer'>
                <div>
                  <SlUserFollow fill='white'size={20}/><p>{usuario?.followers}</p><p>seguidores</p>
                </div>
                <div>
                  <SlUserFollowing fill='white'size={20}/><p>{usuario?.following}</p><p>Seguindo</p>
                </div>
              </div>
            </div>
        </div>        
        <div>
          <img src={usuario?.avatar_url? usuario.avatar_url : `https://www.inovegas.com.br/site/wp-content/uploads/2017/08/sem-foto.jpg`} alt={"imagem-perfil"} />
        </div>
      </div>
      <div className={esconderRepo}>
        <h3>Respositórios</h3>
        <div className='containerCardsGeral'>
          {projetos.map((el)=>{
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
    </>
    
  )
}