import { Badge, Box ,Text, HStack } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
 
type NftProps = {

//   price: number
  image: string
//   title: string
}


const Nft = ({image}:NftProps) => {
  return (
   <Box w="300px" margin="50px"  rounded="20px" overflow="hidden" shadow="sm" borderWidth="8px" borderColor="purple.500" bg="blue.700"> 
   <img src={image} />
<Box p={10}>
<Text 
 bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="3xl"
  fontWeight="extrabold">Enoch Citizen</Text>
<Badge variant='solid' rounded='full' px={2} marginRight="30px" >HOT DEAL</Badge>
<Badge variant='solid' rounded='full' px={2}>AUCTION</Badge>
<HStack>
    <Text
    marginTop="10px"
    color="green.500"
    fontSize="xl"
    fontWeight="extrabold"
    >$250</Text>
</HStack>
</Box>
   </Box>
  )
}

export default Nft