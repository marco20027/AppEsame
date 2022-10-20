import React from "react";
import { Routes, Route } from "react-router-dom";
import Consulenza from './componenti/Consulenza';
import Chisiamo from './componenti/Chisiamo'
import Home from './componenti/Home'
import Dovesiamo from "./componenti/Dovesiamo";
import Registrazione from './componenti/Registrazione'
import './App.css';


function App() {  
  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path="/Consulenza" element={<Consulenza />} />
        <Route path="/Chisiamo" element={<Chisiamo />} />
        <Route path="/Dovesiamo" element={<Dovesiamo />} />
        <Route path='/Registrazione' element={<Registrazione />} />
      </Routes>
    </div>


    )
    }

export default App;
