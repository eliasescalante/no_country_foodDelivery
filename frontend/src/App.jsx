import React,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

//layouts
import Header from './layouts/header/header.jsx'
import Footer from './layouts/footer/footer.jsx'

//pages
import Home from './pages/home/home.jsx'
import Categories from './pages/categories/categories.jsx'
import Restaurants from './pages/restaurants/restaurants.jsx';
import RestaurantId from './pages/restaurantId/restaurantId.jsx';



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
        <Route
          path="/categories"
          element={
            <div>
             <Header /> 
              <Categories />
              <Footer />
            </div>
          }
        />
        <Route
          path="/restaurants"
          element={
            <div>
             <Header /> 
              <Restaurants />
              <Footer />
            </div>
          }
        />


        <Route
          path="/restaurants/:id"
          element={
            <div>
             <Header /> 
              <RestaurantId />
              <Footer />
            </div>
          }
        />
        </Routes>
   </div>
  )
}

export default App
