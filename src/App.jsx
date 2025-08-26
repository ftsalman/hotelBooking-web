import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Footer from './Components/Footer'
import { AllRooms } from './pages/AllRooms'
import { RoomDetails } from './Components/RoomDetails'

const App = () => {

   const isOwnterPath  = useLocation().pathname.includes("ownter");


  return (
    <>
    
     {!isOwnterPath && <Navbar/>}

      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
             <Route path='/rooms' element={<AllRooms />} />
                <Route path='/rooms/:id' element={<RoomDetails />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
