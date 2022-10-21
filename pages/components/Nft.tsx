import { Badge, Box ,Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
 
type NftProps = {

//   price: number
  image: string
//   title: string
}


const Nft = ({image}:NftProps) => {
  return (
   <Box w="300px" marginTop="30px"  rounded="20px" overflow="hidden" boxShadow="sm" bg="blue.700"> 
   <img src={image} />
<Box p={10}>
  
<Badge variant='solid' rounded='full' px={2} marginRight="30px" >HOT DEAL</Badge>
<Badge variant='solid' rounded='full' px={2}>AUCTION</Badge>
<Text 
 bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="3xl"
  fontWeight="extrabold">Enoch Citizen</Text>
</Box>
   </Box>
  )
}

export default Nft