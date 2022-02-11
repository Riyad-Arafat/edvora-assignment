import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #232323;
    position: relative;
    color: #fff;
    height: 100vh;
    overflow-x: hidden;
    padding-top: 40px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  .swiper{
    width: 95%;
    background-color: #131313;
    border-radius: 15px;
    margin: 0 0 auto;

  }
  .swiper-wrapper{
    margin: 0 -24px !important;
  }
  .swiper-button-disabled{
    display: none;
  }
  .swiper-button-next,.swiper-button-prev{
    color: #fff !important;
    top: 61%;
  }
  .swiper-button-next{
    right: 5px;

  }

  .expandable {
    transition: all 0.25s ease-in-out;
    height: 0;

  }

  .dflex{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }


`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
