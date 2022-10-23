import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, SimpleGrid } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Nft from '../components/Nft'




function MyApp({ Component, pageProps }: AppProps) {

  return (

    <ChakraProvider>
<Navbar/>
<SimpleGrid  columns={{sm: 1, md: 3}} gap={2}>
<Nft
 image={'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000'}
 
 title="Enotch"
 price={260}/>
<Nft
 image={'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611048.jpg?w=740&t=st=1666365414~exp=1666366014~hmac=cea9e97a65027d089aa31ae932a5cc1d66683b3fcc9713377a9b062c40408ee6'}
 title="Guy meraz"
 price={300}/>
<Nft
 image={'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg?w=740&t=st=1666365478~exp=1666366078~hmac=2c508cee1f6886aa5aae3dbd2e416fb6a708fc08af3721d9000a5d1a888299ba'}
 title="Sambo cheif"
 price={210}/>
<Nft
 image={'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611048.jpg?w=740&t=st=1666365414~exp=1666366014~hmac=cea9e97a65027d089aa31ae932a5cc1d66683b3fcc9713377a9b062c40408ee6'}
 title="Abx Baken"
 price={510}/>
<Nft
image={"https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=740&t=st=1666365812~exp=1666366412~hmac=13229567974ee31b33cf9e52ce1a332086101bd0dfb5d2586fb5ca67cd7e6f90"}
title="Tom Hosta"
price={230}/>
<Nft
image={"https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149619508.jpg?w=740&t=st=1666365846~exp=1666366446~hmac=1a28238d5f05408d212c4d4222211bf45cc0aaa6321bfe3126185556749f68a3"}
title="Besar Watson"
price={312}
/>


 

      <Component {...pageProps} />
      </SimpleGrid>
    </ChakraProvider>

  )
 

}

export default MyApp
