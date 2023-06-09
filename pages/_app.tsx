import type { AppProps } from 'next/app'
import { createGlobalStyle } from "styled-components";
import HomePage from '.';

const GlobalStyles = createGlobalStyle`
html,
body {
    /* padding: 0;
    padding-top: 20px;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: auto; */
    /* background-color: rgb(42, 42, 42); */
    background-color: black;
    position: relative;
    /* height: auto; */
    scroll-behavior: smooth;
    /* display: flex; */
    /* width: 100%; */
}

@font-face {
    font-family: 'GoogleSans';
    src: url();
}

/* a {
    color: inherit;
    text-decoration: none;
} */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'GoogleSans';
}
`

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )

}

export default MyApp