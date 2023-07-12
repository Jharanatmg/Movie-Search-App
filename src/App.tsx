import React from "react";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="Registerpage" element={<Registerpage />}></Route>
        <Route path="Loginpage" element={<Loginpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
