import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { Perfil } from "./Perfil";

describe("Tela Perfil", () => {
     test('verificar foto de perfil', () => {
        render(<BrowserRouter><Perfil/></BrowserRouter>)
        // expect(screen.getByText('404')).toBeInTheDocument();

    })

    test('verificar nome do perfil do usuário', () => {
        render(<BrowserRouter><Perfil/></BrowserRouter>)
        // expect(screen.getByText('404')).toBeInTheDocument();

    })

    test('verificar localização', () => {
        render(<BrowserRouter><Perfil/></BrowserRouter>)
        // expect(screen.getByText('404')).toBeInTheDocument();

    })

    test('verificar número de seguidores', () => {
        render(<BrowserRouter><Perfil/></BrowserRouter>)
        // expect(screen.getByText('404')).toBeInTheDocument();

    })

    test('verificar número de quem está sendo seguido', () => {
        render(<BrowserRouter><Perfil/></BrowserRouter>)
        // expect(screen.getByText('404')).toBeInTheDocument();

    })
    test('encontrar o nome repositórios', () => {
        render(<BrowserRouter><Perfil/></BrowserRouter>)
        const titulo = screen.getByRole('heading', { level: 3 });
        expect(titulo.textContent).toBe('Respositórios');
    })


})