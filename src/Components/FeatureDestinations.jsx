import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCards from './HotelCards'
import Title from './Title'
import { useNavigate } from 'react-router-dom'



const FeatureDestinations = () => {

    const navigate = useNavigate();

  return (
    <div className=' flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 bg-slates-50 py-20'>

        <Title title="Feature Destinations" subTitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>

        <div className=' flex flex-wrap gap-6 items-center justify-center mt-20'>
            {roomsDummyData.slice(0.4).map((room,index)=>(
                <HotelCards key={room._id} room={room} index={index} />

            ))}
        </div>

        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className=' mt-10  border border-gray-800 px-4 py-2 rounded-md font-medium cursor-pointer'>View All Destinations</button>
        
    </div>
  )
}

export default FeatureDestinations