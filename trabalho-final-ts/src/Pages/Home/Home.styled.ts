import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100%;
    height: 100vh;
    align-items: center;
    text-align: center;

    .main{
        height: 100%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h1{
            color: var(--cor-titulo);
            font-size: 48px;
            font-weight: 700;
        }

        p{
            color: var(--cor-fonte-branco);
            font-size: 36px;
            font-weight: 400;
            max-width: 620px;
        }

        div form{
            justify-content: center;
            display: flex;
            gap: 8px;

            input[type=text]{
                background-color: rgba(254, 253, 253, 0.1);
                border:none;
                outline: none;
                border-radius: 6px;
                border: 1px solid rgba(254, 253, 253, 0.05);
                padding: 16px 12px;
                max-height: 48px;
                color: #ffffff;
                font-size: 20px;

                &::placeholder{
                    font-size: 20px;
                    color: #CCCCCC;
                }   
            }

            button{
                background-color: var(--cor-titulo);
                border:none;
                outline: none;
                border-radius: 6px;
                max-height: 48px;
                padding: 12px;
                opacity: .8;
                cursor: pointer;

                &::placeholder{
                    font-size: 20px;
                }
                
                &:hover{
                    transform: scale(1.02);
                    opacity: 1;
                }
            }
        }

        
    }

`