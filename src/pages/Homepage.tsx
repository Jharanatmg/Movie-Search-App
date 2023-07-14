import React, { useContext, useEffect, useState } from 'react'

import { MovieContext } from '../context/MovieContext';

import { Link } from 'react-router-dom';

import SearchBar from '../components/searchbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Homepage = () => {
  const {boxOffice}=useContext(MovieContext)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, 
    pauseOnHover: true,
  };
  
    

 
  return (
   <>
   <div className='w-full bg-gradient-to-t from-black via-black to-transparent'>
  <h1 className='text-white text-center text-3xl mt-32'>Find Perfect movie for your evening</h1>
  <h1 className='text-white text-center text-3xl'>only on</h1>
  <h1 className='text-white text-center text-3xl font-mono mt-2 underline'>Filmography</h1>
   <div className='w-[95%] mx-auto '>
   <h1 className='text-white text-2xl mb-2'>Top Trending</h1>
   {
   boxOffice ?(
    
   <Slider{...settings}> 
   
    {boxOffice.map((item)=>(
    <div key={item.id} className='text-white border-2 backdrop-blur-md h-74 text-center  flex flex-col justify-center align-top'>
      
      <Link to={`/boxoffice/${item.id}`}>
       
        <img src={item.image[0][1]} style={{height:'300px', width:'300px'}}/>
      
      
      </Link>
      
    </div>
   ))}
    </Slider>
   )
   
  :('')}
   </div>
   </div>
   </>
  )
}

export default Homepage