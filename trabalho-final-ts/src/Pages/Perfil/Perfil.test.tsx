import { render, screen, cleanup, waitFor, findByTestId } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Perfil } from "./Perfil";
import axiosMock from 'axios';
// import "jest-dom/extend-expect";
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
afterEach(cleanup);

describe("Tela Perfil", () => {
    
    test('encontrar o nome do usuário', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: {username:'DanielaLeguari'} })
        const url = 'https://api.github.com/users/';
        render(<Perfil />)

        const usuario = await screen.findByTestId('username');

        expect(usuario).toHaveTextContent('DanielaLeguari');
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith(url);
    })


})
