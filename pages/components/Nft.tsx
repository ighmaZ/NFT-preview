import { Badge, Box ,Text, HStack,Button } from '@chakra-ui/react'
import React from 'react'
import {  StarIcon } from '@chakra-ui/icons'
 
type NftProps = {

  price: number
  image: string
  title: string
}


const Nft = ({price,image,title}:NftProps) => {
  return (
   <Box w="300px" margin="50px"  rounded="20px" overflow="hidden" shadow="sm" borderWidth="8px" borderColor="purple.400" bg="purple.100"> 
   <img src={image} />
<Box p={10}>
<Text 
 bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="3xl"
  fontWeight="extrabold">{title}</Text>
<Badge variant='solid' rounded='full' px={2} marginRight="30px" >HOT DEAL</Badge>
<Badge variant='solid' rounded='full' px={2}>AUCTION</Badge>
<HStack justifyContent="space-between">
    <Text
    marginTop="10px"
    color="green.300"
    fontSize="xl"
    fontWeight="extrabold"
    >${price}</Text>
   <StarIcon color="red.500" />
</HStack>
<Button 
colorScheme ="purple"
>Bid Now</Button>
</Box>
   </Box>
  )
}

export default Nft