import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"


import { Container } from "../styles/pages/app";

import Image from 'next/image';
import { Header } from "../components/Header";
import { CartContnextProvider } from "../contexts/CartContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartContnextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartContnextProvider>
  )
}


