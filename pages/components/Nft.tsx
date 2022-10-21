import React from 'react'
 
type NftProps = {

  price: number
  image: string
  title: string
}


const Nft = ({price,image,title}:NftProps) => {
  return (
    <div>Nft</div>
  )
}

export default Nft