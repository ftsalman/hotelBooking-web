import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating= 4}) => {
  return (
    <>

                {Array(5)
                  .fill('')
                  .map((_, index) => (
                    <img src={ rating > index ? assets.starIconFilled : assets.starIconOutlined} alt=""  className=' w-5.5 h-5.5'/>
                  ))}
    
    </>
  )
}

export default StarRating