import React, {createContext, useState, useEffect, ReactNode} from 'react'
//import axios from 'axios'
//import RapidApiMovies from '../api/RapidApiMovies'
//import BoxOfficeData from './../api/BoxOfficeData';
import { IMDBmovies } from '../api/imdbdata';
import { Topmovies } from '../api/topmovies';
interface IMovieContext{
    movies:IMDBMovie[],
    boxOffice:TopMovie[]
}
interface IMDBMovie{
    rank: number;
    title: string;
    thumbnail: string;
    rating: string;
    id: string;
    year: number;
    image: string;
    description: string;
    trailer: string;
    genre: string[];
    director: string[];
    writers: string[];
    imdbid: string;
}
interface TopMovie {
    _id: string;
    id: string;
    __v: number;
    description: string;
    director: string[];
    genre: string[];
    image: [string, string][];
    imdbid: string;
    rank: number;
    rating: string;
    thumbnail: string;
    title: string;
    writers: string[];
}

interface IMovieProvider{
    children:ReactNode

}
export const MovieContext= createContext<IMovieContext>({movies:[], boxOffice:[]})
export const MovieProvider = ({children}:IMovieProvider) => {
    const[movies, setMovies]=useState<IMDBMovie[]>(IMDBmovies)
    const[boxOffice, setBoxOffice]=useState<TopMovie[]>(Topmovies)
    //const fetchMovies=async()=>{
      //  const data=await RapidApiMovies()
        //setMovies(data)
    //}
   
    //const fetchBoxOffice=async()=>{
      //  const Boxdata=await BoxOfficeData()
        //console.log(Boxdata)
        //setBoxOffice(Boxdata)
        
    //}
    //useEffect(()=>{
        //fetchMovies()
        //fetchBoxOffice()
   // },[])
  return (
    <MovieContext.Provider value={{movies,boxOffice}}>
        {children}
    </MovieContext.Provider>
  )
}

