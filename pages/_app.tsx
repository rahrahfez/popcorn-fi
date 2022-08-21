import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

function
MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
)}

const quokkoTest = function (b: number) {
  let a = 5;
  console.log(a);
  return a + b;
}

const test = quokkoTest(2);

test

export default MyApp
