import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext'

const MoviePage = () => {
    const{boxOffice}=useContext(MovieContext)
    console.log(boxOffice)
    const {id} =useParams()
    const movie=boxOffice.find((movie)=>movie.id===id)
  return (
    <div className='text-white flex flex-col justify-center items-center w-[50%] mx-auto p-4 bg-opacity-50 bg-black h-auto mt-6'>
    <h1 className='text-3xl mb-2'>{movie?.title}</h1>
    <img src={movie?.image[0][1]} style={{height:'300px', width:'300px'}}/>
    <p className='text-center  mt-2'>{movie?.description}</p></div>
  )
}

export default MoviePage