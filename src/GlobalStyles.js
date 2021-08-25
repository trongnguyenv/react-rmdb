import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --max-width: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --indigo: #564ab1;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.2rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem; 
    }

    *{
        box-sizing: border-box;
        /* font-family: 'Roboto,Helvetica Neue,sans-serif'; */
    }

    body{
        margin: 0;
        padding: 0;

        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }

        p{
            font-size: 1rem;
            color: var(--white);
        }
    }    
`;