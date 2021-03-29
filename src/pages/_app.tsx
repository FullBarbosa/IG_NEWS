import { AppProps } from "next/app";

import { GlobalStyled } from "../styles/global";

// inportar eestilo scss
// import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      {/* importar estilo styled-components */}
      <GlobalStyled />
    </>
  );
}

export default MyApp;
