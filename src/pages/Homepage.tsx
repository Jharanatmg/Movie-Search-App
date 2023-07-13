import React, { useContext, useEffect, useState } from 'react'
//import axios from 'axios';
import { MovieContext } from '../context/MovieContext';
//import SearchBar from '../components/searchbar';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import SearchBar from '../components/searchbar';

const Homepage = () => {
  const {boxOffice}=useContext(MovieContext)
  
    

 
  return (
   <>
  
   <SearchBar/>
   {
   boxOffice ? boxOffice.map((item)=>(
    <li key={item.id}>
      <Link to={`/boxoffice/${item.id}`}>{item.title}</Link>
    </li>
   ))
  :('')}
   
   </>
  )
}

export default Homepage