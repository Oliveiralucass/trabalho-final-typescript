import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NotFind } from "./NotFind";

//Encontrar o texto de erro na tela
describe('Tela NotFind', () => {
    test('Encontrar o texto de erro 404 na tela', () => {
        render(<BrowserRouter><NotFind /></BrowserRouter>)
        expect(screen.getByText('404')).toBeInTheDocument();

    })

    test('Encontrar mensagem de página não encontarda', () => {
        render(<BrowserRouter><NotFind /></BrowserRouter>)
        expect(screen.getByText('Essa página não foi encontrada')).toBeInTheDocument();

    })
})
