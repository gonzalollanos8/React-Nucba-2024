import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`

    :root{
        --principal-color: #050505;
        --secondary-color: #f12d0f;
        --background: #fff;
    }

    html{
        scroll-behavior: smooth;
    
    }

    body{
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        
    }

    li{
        list-style: none;
    }

    a{
        color: white;
        text-decoration: none;
    }
    a:visited{
        color: white;
    }
`