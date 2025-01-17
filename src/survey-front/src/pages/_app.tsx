import type { AppProps } from "next/app";

import "@/styles/globals.scss";
import { Toaster } from "react-hot-toast";
////////////////////////////////////////////////////////////////////////////////

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}
