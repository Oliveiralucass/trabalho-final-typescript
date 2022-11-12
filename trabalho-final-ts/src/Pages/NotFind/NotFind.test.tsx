import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NotFind } from "./NotFind";

//Encontrar o texto de erro na tela
describe('Tela NotFind', () => {
    render(<BrowserRouter><NotFind /></BrowserRouter>)
    test('Encontrar o texto de erro na tela', () => {
        expect(screen.getByText('404')).toBeInTheDocument();

    })
})
