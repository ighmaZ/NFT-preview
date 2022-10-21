import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Nft from './components/Nft'
import { Grid, GridItem } from '@chakra-ui/react'


function MyApp({ Component, pageProps }: AppProps) {

  return (

    <ChakraProvider>
<Navbar/>
<Grid templateColumns='repeat(3, 2fr)' gap={2}>
<Nft
 image={'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'}
 />
<Nft
 image={'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'}
 />

      <Component {...pageProps} />
      </Grid>
    </ChakraProvider>

  )
 

}

export default MyApp
