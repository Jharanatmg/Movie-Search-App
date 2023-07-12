import React from "react";
import{Routes,Route } from 'react-router-dom'
import Loginpage from './pages/Loginpage';
import Registerpage from "./pages/Registerpage";
import Homepage from "./pages/Homepage";
function App() {
  return <>
  <Routes>
   
    <Route path="/" element={<Registerpage/>}></Route>
    <Route path="Loginpage" element={<Loginpage/>}></Route>
  </Routes>
  
  </>
}

export default App;
