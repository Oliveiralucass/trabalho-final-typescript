import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    max-width: 1440px;
    margin: 0 auto;

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        height: 100vh;
        color: var(--cor-fonte-branco);
        line-height: 4rem;
    }

    h1{
        font-size: 50px;
    }

    p{
        font-size: 30px;
    }



`
