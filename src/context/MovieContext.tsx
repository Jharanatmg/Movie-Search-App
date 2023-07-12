import React, {createContext, useState, useEffect, ReactNode} from 'react'
import axios from 'axios'
import RapidApiMovies from '../api/RapidApiMovies'
interface IMovieContext{
    movies:Movie[]
}
interface Movie{
    id:string,
    title:string,
    image:string,
    thumbnail:string,
}
interface IMovieProvider{
    children:ReactNode

}
export const MovieContext= createContext<IMovieContext>({movies:[]})
export const MovieProvider = ({children}:IMovieProvider) => {
    const[movies, setMovies]=useState<Movie[]>([])
    const fetchMovies=async()=>{
        const data=await RapidApiMovies()
        setMovies(data)
    }
    useEffect(()=>{
        fetchMovies()
    },[])
  return (
    <MovieContext.Provider value={{movies}}>
        {children}
    </MovieContext.Provider>
  )
}

