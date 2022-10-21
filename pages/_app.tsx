import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Nft from './components/Nft'


function MyApp({ Component, pageProps }: AppProps) {

  return (

    <ChakraProvider>
<Navbar/>
<Nft/>
      <Component {...pageProps} />

    </ChakraProvider>

  )
 

}

export default MyApp
