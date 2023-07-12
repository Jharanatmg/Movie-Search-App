import React, { useEffect } from 'react'
import axios from 'axios';

const Homepage = () => {
  useEffect(()=>{
    
const fetchData=async()=>{
const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '32308d209cmsh4eed8e2c3913496p1b681fjsneee5d1d2d536',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}  
fetchData()
},[])
  return (
    <div>Homepage</div>
    
  )
}

export default Homepage