import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layouts/header/header.jsx'
import Home from './pages/home/home.jsx'
import Footer from './layouts/footer/footer.jsx'

import './App.css'

function App() {

  return (
   <div className='bg-bgPrimary  w-full h-full font-comic'>
      <Routes>
        <Route
          path="/"
          element={
            <div>
             <Header /> 
              <Home />
              <Footer />
            </div>
          }
        />
        </Routes>
   </div>
  )
}

export default App
