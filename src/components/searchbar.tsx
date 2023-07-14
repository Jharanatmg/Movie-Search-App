import React, { ChangeEvent, useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import{AiOutlineSearch} from 'react-icons/ai'
interface IItem{
    title:string,
    id:string,
    image:string,
    description:string,
    trailer:string,
    rating:string,

}
const SearchBar = () => {
    const[input, setInput]=useState('')
    const[filterData, setFilterData]=useState<IItem[]>([]) 
    const[open, setOpen]=useState(false)
    const[select, setSelect]=useState('')
    const {movies}=useContext(MovieContext)
    //handleInput
    const handleInput=(event:ChangeEvent<HTMLInputElement>)=>{
      setInput(event.target.value)
     const filterData=movies.filter(item=> item.title.toLocaleLowerCase(). includes(input.toLowerCase()))
        setFilterData(filterData)
    }
  const handleOpen=(movieid:string)=>{
    setSelect(movieid)
    setOpen(!false)

  }
    
  return (
    <>
    <div className='grid place-items-center h-32 mt-32'>
      <h1 className='font-semibold text-2xl text-white'>Find Perfect movie for your evening</h1>
      <div className='flex justify-center'>
    <input className='rounded-md p-2 w-96' type='text' placeholder='Tiltle of the movie...' onChange={handleInput}/>
    <button className='pl-2 text-white'><AiOutlineSearch size={40}/></button></div>
    </div>
    {input && filterData.length>0 &&
    <div className='bg-gradient-to-b from-transparent via-black to-black backdrop-blur-sm'>
    <div className='grid grid-cols-3 gap-4 p-2 text-white mt-5 bg-gradient-to-t from-black via-black to-bg-transparent place-contents-center '>
   
    {filterData.map ((movie)=>(
        <div key={movie.id} onTouchMove={()=>handleOpen(movie.id)} className='border-2 border-zinc-700 rounded-md  backdrop-blur-sm p-4 text-center backdrop-brightness-100 flex flex-col justify-center items-center'>
            <p className='mb-2 text-2xl'>{movie.title}</p>
            <img src={movie.image} width='250'/>
        </div>
        
    ))}
    
    </div>
    </div>
}
{open ? (
  <div className=' absolute top-[30%] left-[22%] w-[60%] h-auto bg-black text-white'>
   {filterData.map ((movie)=>(
    movie.id===select ? (
        <div key={movie.id}  className='p-4 border-2 border-zinc-700 rounded-md text-center flex flex-col justify-center items-center'>
            <p className='mb-6 text-2xl '>{movie.title}</p>
            <img src={movie.image} width='300'/>
            <p className='mt-1 text-xl'>{movie.description}</p>
            <video className='mt-6' src={movie.trailer} autoPlay controls> </video>
        </div>):('')
        
    ))}
  </div>

):('')}
    </>
  )
}

export default SearchBar