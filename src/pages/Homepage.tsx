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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, 
    pauseOnHover: true,
  };
  
    

 
  return (
   <>
  
   <SearchBar/>
   {
   boxOffice ?(
   <Slider{...settings}> 
    {boxOffice.map((item)=>(
    <div key={item.id} className='text-white w-96 h-96 border-2 mx-auto mt-12  text-center flex justify-center items-center'>
      
      <Link to={`/boxoffice/${item.id}`}>
        <h1 className='text-xl font-semibold mb-2'>{item.title}</h1>
        <img src={item.image[0][1]} style={{height:'300px', width:'250px'}}/>
       <p>{item.description}</p>
      
      </Link>
      
    </div>
   ))}
    </Slider>
   )
   
  :('')}
   
   </>
  )
}

export default Homepage