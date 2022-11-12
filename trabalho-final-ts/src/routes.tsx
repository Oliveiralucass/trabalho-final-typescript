import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { NotFind } from './Pages/NotFind/NotFind'
import { Perfil } from './Pages/Perfil/Perfil'

export const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/perfil'>
              <Route index element={<Perfil />} />
              <Route path="/perfil/:id" element={<Perfil />}/>
            </Route>

            <Route path='*' element={<NotFind />} />
        </Routes> 
    </BrowserRouter>
    </>
  )
}
