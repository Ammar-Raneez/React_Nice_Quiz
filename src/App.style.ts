import BGImage from './images/bgimage.jpg'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    } 

    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
`

export const AppWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    > p.score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    > h1 {
        font-family: "Fascinate Inline";
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%cover;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-weight: 400;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }
`