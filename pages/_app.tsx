import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #232323;
    color: #fff;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
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
    right: 24px;

  }

  .expandable {
    overflow: hidden;
    transition: all 0.25s ease-in-out;
    height: 0;

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
