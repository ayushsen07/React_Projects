import { useState } from 'react'
import { RouterProvider, createBrowserRouter, BrowserRouter, Routes, Route } from 'react-router'
import Home from '../src/components/Home'
import Login from '../src/components/Login'

import './App.css'
import PretectedRoute from './components/PretectedRoute'




function App() {


  const router = createBrowserRouter([
    {
      path :'/',
      element :<PretectedRoute/>
    },
    {
      path :'/home',
      element : <Home/>
    },
    {
      path :'/login',
      element :<Login/>
    }
    
  ])

  return (
   <RouterProvider router={router}/>
  // <BrowserRouter>
  //    <Routes>
  //     <Route path='/' element={<PretectedRoute/>}/>
  //     <Route path='/home' element={<Home/>}/>
  //     <Route path='/login' element={<Login/>}/>
  //    </Routes>
  // </BrowserRouter>
  )
}

export default App
