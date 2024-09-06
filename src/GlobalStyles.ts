import {createGlobalStyle} from 'styled-components'

export const GlobalStyles =  createGlobalStyle`
    /* CSS Reset */
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }

    /* Additional reset rules can go here */

    /* Resetting headings, paragraphs, and lists */
    h1, h2, h3, h4, h5, h6, p, ul, ol {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    ul, ol {
        list-style: none;
    }

    /* Resetting links */
    a {
        text-decoration: none;
        color: inherit;
    }
`