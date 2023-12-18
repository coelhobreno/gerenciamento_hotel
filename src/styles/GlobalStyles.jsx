import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    *, button, input, select{
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    :root{
        --primary: #202124;
        --secondary: #1B1B1F;
        --tertiary: #FC5D19;

        --icons: #6B6E76;
        --white: #FFF;
        --scroll: #101010;
        --grey: #4D505A;
        --black: #000;

        //CONTAINER WRONG
        --color-wrong: #721c24;
        --back-wrong: #f8d7d4;
        --border-wrong: #f5c6cb;

        //CONTAINER RIGHT
        --color-right: #1c7223;
        --back-right: #d4f8dc;
        --border-right: #cbf5c6;

        --text-primary: #FFFFFF;
        --text-secondary: #4D505A;
    }
`