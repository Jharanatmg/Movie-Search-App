import React, { ChangeEvent, useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import{AiOutlineSearch} from 'react-icons/ai'
interface IItem{
    title:string,
    id:string,
    image:string,
}
const SearchBar = () => {
    const[input, setInput]=useState('')
    const[filterData, setFilterData]=useState<IItem[]>([]) 
    const {movies}=useContext(MovieContext)
    const handleInput=(event:ChangeEvent<HTMLInputElement>)=>{
      setInput(event.target.value)
     const filterData=movies.filter(item=> item.title.toLocaleLowerCase(). includes(input.toLowerCase()))
        setFilterData(filterData)
    }
    
  return (
    <>
    <div className='grid place-items-center h-32 mt-32'>
      <h1 className='font-semibold text-2xl text-white'>Find Perfect movie for your evening</h1>
      <div className='flex justify-center'>
    <input className='rounded-md p-2 w-96' type='text' placeholder='Tiltle of the movie...' onChange={handleInput}/>
    <button className='pl-2 text-white'><AiOutlineSearch size={40}/></button></div>
    </div>
    <div className='grid grid-cols-3 gap-3 text-white mt-5 bg-gradient-to-t from-black via-black  to-bg-transparent place-contents-center w-full'>
    {filterData.map ((movie)=>(
        <div key={movie.id} className='border-2 border-zinc-700 rounded-md  backdrop-blur-sm p-4 text-center backdrop-brightness-100 flex flex-col justify-center items-center'>
            <p>{movie.title}</p>
            <img src={movie.image} width='250'/>
        </div>
        
    ))}
    
    </div>
    </>
  )
}

export default SearchBar