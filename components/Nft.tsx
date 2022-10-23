import { Badge, Box ,Text, HStack,Button, Image, Center, VStack} from '@chakra-ui/react'
import React from 'react'

import {  StarIcon } from '@chakra-ui/icons'
 
type NftProps = {

  price: number
  image: string
  title: string
}


const Nft = ({price,image,title}:NftProps) => {
  return (
   <Box w="300px" margin="50px" overflow="hidden" shadow="sm" borderWidth="8px" borderColor="#112135" bg="#112135"> 
   
   <HStack margin="5" justifyContent="space-between">
<Badge variant='solid' rounded='full' p={2}   bg="#081321" border="solid"  borderColor="#3f4860" >HOT DEAL</Badge>
<Badge variant='solid' rounded='full' p={2}  bg="#081321" border="solid"  borderColor="#5d432b" >AUCTION</Badge>

   </HStack>
   <Image src={image}   borderRadius='sm'  boxSize='250px' marginLeft="4"  objectFit='cover'/>
<Box >
  <HStack justifyContent="space-between"  margin={1}  marginTop={2}>
<Text 
 bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="2xl"
  fontWeight="extrabold">{title}</Text>
  <HStack>
    <StarIcon color="red.500"  />
    <Text color='white '>92</Text>

  </HStack>
    </HStack>
    <Text color="blue.300" fontSize="sm" >Enoch Citizen</Text>

<HStack justifyContent="space-evenly" margin="4">

    <Box border="solid" borderColor="#3f4860"  padding="2">
   <VStack>
    <Text
     color="green.500"
   >Highest Bid</Text>
    <Text
    color="white"
    fontSize="sm"
    fontWeight="extrabold"
    >${price}</Text>
   </VStack>
    </Box>
    <Box border="solid" borderColor="#3f4860" padding="2" width="8rem">
   <VStack>
    <Text
     color="green.500"
   >Highest Bid</Text>
    <Text
    color="white"
    fontSize="sm"
    fontWeight="extrabold"
    >${price}</Text>
   </VStack>
    </Box>
</HStack>


    <Center>
<Button 
colorScheme ="messenger"
borderRadius="none"
width="80%"
margin={1}
>Bid Now</Button>
    </Center>
</Box>
   </Box>
  )
}

export default Nft