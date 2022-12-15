import { AppProps } from "next/app";
import Nav from "../components/Nav";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default App;
