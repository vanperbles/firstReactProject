import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import HomePage from './Pages/homePage'

import { Route,  RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom'



import './App.css'
import RouteLayout from './layout/RouteLayout'
import About from './Pages/About'
import Contact from './Pages/Contact'


const App = () => {

  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RouteLayout />}>
      <Route index element={<HomePage />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />

    </Route>
  ))

  return (
    <>
    <RouterProvider router={route} /> 
    </>
  )
}

export default App