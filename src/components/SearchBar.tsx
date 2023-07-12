import React, { ChangeEvent, useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
interface IItem{
    title:string,
    id:string,
    thumbnail:string,
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
    <input type='text' placeholder='search' onChange={handleInput}/> 
    {filterData.map ((movie)=>(
        <div key={movie.id}>
            <p>{movie.title}</p>
        </div>
    ))}
    </>
  )
}

export default SearchBar