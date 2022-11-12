import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Home";

//tela inicial
describe('Tela Home', () => {
    test('verificar se o titulo "Gitstats está na página home', () => {
        render(<BrowserRouter><Home /></BrowserRouter>)
        const titulo = screen.getByRole('heading', { level: 1 });
        expect(titulo.textContent).toBe('Gitstats');
    })

    test('Encontrar texto de descrição para digite seu usuario para visualizar suas informações de perfil', () => {
        render(<BrowserRouter><Home /></BrowserRouter>)
        expect(screen.getByText('Digite seu nome de usuário e veja informações sobre seu perfil')).toBeInTheDocument();
    })

    test('encontrar o input de username', () => {
        render(<BrowserRouter><Home /></BrowserRouter>)
        const input = screen.getByPlaceholderText('Username');
        expect(input).toBeInTheDocument();
    })

    test('encontrar o botao verde com icone', () => {
        render(<BrowserRouter><Home /></BrowserRouter>)
        const botao = screen.getByRole('button');
        expect(botao).toBeInTheDocument();
    })
    
})









