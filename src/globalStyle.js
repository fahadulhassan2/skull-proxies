import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        background: #0b0e11;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }
`;

export default GlobalStyle;