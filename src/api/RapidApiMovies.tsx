import React from 'react'
import axios from 'axios'

const RapidApiMovies = async () => {
const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '109e979d10mshf733945638230d6p1c2da8jsn19a053aec974',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
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