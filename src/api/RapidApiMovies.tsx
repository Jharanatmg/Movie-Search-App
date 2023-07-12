import React from 'react'
import axios from 'axios'

const RapidApiMovies = async () => {
  

  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies1.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '32308d209cmsh4eed8e2c3913496p1b681fjsneee5d1d2d536',
      'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return(response.data);
  } catch (error) {
    console.error(error);
  }
      
    
        
  return (
    <div>RapidApi</div>
  )
}

export default RapidApiMovies