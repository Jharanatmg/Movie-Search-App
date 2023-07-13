import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext'

const MoviePage = () => {
    const{boxOffice}=useContext(MovieContext)
    console.log(boxOffice)
    const {id} =useParams()
    const movie=boxOffice.find((movie)=>movie.id===id)
  return (
    <div className='text-white'>MoviePage
    <p>{movie?.title}</p>
    <p>{movie?.description}</p></div>
  )
}

export default MoviePage