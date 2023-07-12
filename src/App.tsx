import React from "react";
import{Routes,Route } from 'react-router-dom'
import Loginpage from './pages/Loginpage';
import Registerpage from "./pages/Registerpage";
import Homepage from "./pages/Homepage";
import SearchBar from "./components/SearchBar";
function App() {
  return <>
   <SearchBar/>
  <Routes>
     <Route path="/" element={<Homepage/>}></Route>
    <Route path="Registerpage" element={<Registerpage/>}></Route>
    <Route path="Loginpage" element={<Loginpage/>}></Route>
  </Routes>
 
  </>
}

export default App;
