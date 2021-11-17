import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #d2702a;
        --dark: #312922;
        --soft: #603815;
        --hover: #504C48;
        --dark-secondary: #3D2A1D;
        --grey: #807269
    }

    * {
        width: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fjalla One', sans-serif;
    }
`
export default GlobalStyle;