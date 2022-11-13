import React from 'react'
import styled from 'styled-components'

export const Botao = styled.button`
    margin: 20px 0px 0px 20px;
    width: 110px;
    height: 30px;    
    background-color: var(--cor-titulo);
    border-radius: 8px;
    border: none;

    a{
        text-decoration: none;
        font-weight: bold;
        color: var(--cor-fonte-branco);
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;

    li{
        list-style: none;
    }

    p, li{
        color: var(--cor-fonte-branco);
        font-size: 14px;        
    }

    h1, h3{
        color: var(--cor-titulo);
        font-weight: bold;
    }

    h1 {
        font-size: 48px;
    }

    h3 {
        font-size: 32px;
    }

    .usuarioContainer {
        display: flex;
        gap: 20px;
        margin-top: 150px;

        img {
            width: 150px;
            border-radius: 50%;
        }

        .perfilContainer{
            margin-top: 30px;
        }

        .infoContainer {
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            .bioContainer{
                max-width: 500px;
                line-height: 20px;
            }

            >div{
                display: flex;
                align-items: baseline;
                gap: 10px;
            }
            
            .seguidoresContainer{
                display: flex;
                align-items: center;
                gap: 20px;
                >div{
                    display: flex;
                    align-items: baseline;
                    gap: 10px;
                }
            }
        }
    }

    .repoContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;

        .containerCardsGeral{
            margin-top: 30px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 1200px; //Se diminuir essa largura diminui a qnt de  cards por linha
            gap: 20px;

            .iconContainer{
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
    
            .cardContainer {
                padding: 20px;
                display: flex;
                align-items: center;
                width: 250px;
                /* height: 250px; */
                border-radius: 10px;
                flex-direction: column;
                gap: 20px;
                background-color: #33364e;

                & p:nth-child(3){
                    height: 80px;
                }

                & p:last-child{
                    margin-top: 10px;
                }
            }
        }
    }

`

