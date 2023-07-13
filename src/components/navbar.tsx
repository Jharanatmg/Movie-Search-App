import { Link } from "react-router-dom";
import{AiOutlineSearch} from 'react-icons/ai'

function Navbar() {
  return (
    <div className=" flex justify-center items-center">
     
      <div className="w-2/3 mt-2 h-12 bg-black flex gap-5 pl-4 items-center text-white text-xs">
      <div className="text-xl mr-32 font-semibold">
        <a>Filmography</a>
      </div>
        <a> FILMS </a>
        <a> SERIAL </a>
        <a> GAMES </a>
        <a> CINEMA REPERTORY </a>
        <a> TV PROGRAM </a>
        <a> MAGAZINE </a>
       <Link to='/Searchpage'> {<AiOutlineSearch size={30}/> }</Link>
      </div>
      <div className="mt-2 h-12 bg-blue-500 divide-x-2 flex items-center text-sm">
       
          
          <Link to="/Loginpage" className="pr-2 pl-2"> LOGIN </Link>
      
        
          
          <Link to="/Registerpage" className="pr-2  pl-2"> REGISTER </Link>
      
      </div>
    </div>
  );
}

export default Navbar;
