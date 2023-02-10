import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Landing} from './pages/Landingpage/landing.jsx';

export const App= () => {
  return (
  
    <Routes>
<Route path='/' element={<Landing />} exact="true"> 
</Route>
    </Routes>
  )
}