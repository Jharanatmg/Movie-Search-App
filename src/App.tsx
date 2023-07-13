import React from "react";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Homepage from "./pages/Homepage";
import SearchBar from "./components/searchbar";
import Navbar from "./components/navbar";
import MoviePage from "./pages/MoviePage";
import bimg from "./assets/movie-9pvmdtvz4cb0xl37.jpg";
function App() {
  return <>
  
  <div className="backgroundImg h-screen" style={{ backgroundImage: `url(${bimg})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
  <div className="h-screen  bg-black bg-opacity-80">
  <Navbar/>
  <Routes>
     <Route path="/" element={<Homepage/>}></Route>
    <Route path="Registerpage" element={<Registerpage/>}></Route>
    <Route path="Loginpage" element={<Loginpage/>}></Route>
    <Route path="/boxoffice/:id" element={<MoviePage/>}></Route>
  </Routes>
  </div>
  
  </div>
  </>
}

export default App;
