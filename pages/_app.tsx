import type { AppProps } from "next/app";

import BackgroundContextProvider from "../components/BackgroundContext";
import Theme from "../components/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <BackgroundContextProvider>
        <Component {...pageProps} />
      </BackgroundContextProvider>
    </Theme>
  );
}
export default MyApp;
