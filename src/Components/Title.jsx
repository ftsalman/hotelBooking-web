import React from 'react'

const Title = ({title,subTitle,alignment,font}) => {
  return (
    <div className={` flex flex-col items-center justify-center  text-center ${alignment === "left" && "md:items-start md:text-left"}`}>
         <h1 className={`text-4xl md:text-[40px] ${ font || "font-playfair"}`}>{title}</h1>
         <p className=' text-sm md:text-base text-gray-500/50 mt-2 max-w-170'>{subTitle}</p>



    </div>
  )
}

export default Title