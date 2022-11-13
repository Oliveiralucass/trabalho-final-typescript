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

        mockedAxios.get.mockResolvedValue({ 
            data: 
                {
                    name:'oliveiralucass'
                },
            status: 200,
            statusText: 'Ok',
            headers: {},
            config: {},
        })
        
        
        const userProp = `oliveiralucass`;
        render(<Perfil />)
        const usuario = await screen.findByTestId('username');

        expect(usuario).toHaveTextContent('oliveiralucass');
        expect(mockedAxios.get).toHaveBeenCalledTimes(2);   
    })
})
