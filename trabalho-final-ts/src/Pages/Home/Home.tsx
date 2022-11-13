import React, { useEffect, useState } from 'react'
import { Container } from './Home.styled'
import { FaPaperPlane } from 'react-icons/fa'
import { Link, Navigate, redirect, Route, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { watch } from 'fs'


export const Home = () => {

  type THome ={
    username: string
  }
  const navigate = useNavigate();

  const {register, handleSubmit} = useForm<THome>();
  const onSubmit = (data: {username: string}) => {
    console.log(data.username);

    const username = data.username;

    navigate(`/perfil/${username}`);
   }

   let [habilitar, setHabilitar] = useState<boolean>(true);

  return (
    <Container>
      <div className='main'>
        <h1>Gitstats</h1>
        <p>Digite seu nome de usuário e veja informações sobre seu perfil</p>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' id='username' placeholder='Username' {...register("username")} onChange={()=> setHabilitar(false)}/>
            <button type='submit' disabled={habilitar}><FaPaperPlane fill='white'size={20}/></button>
          </form>
        </div>
      </div>
    </Container>
  )
}
