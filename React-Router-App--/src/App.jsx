import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Phone from './components/phone'
import Error from './components/Error'


function App() {
  const router = createBrowserRouter([

    {
      path:'/',
      element:
      <>
      <Navbar/>
      <Home/>
      </>

    },
    {
      path:"/about",
      element:
      <>
      <Navbar/>
      <About/>
      </>
    },
    {
      path :'/Contact',
      element :
      <>
      <Navbar/>
      <Contact/>
      </>,
      children :[
        {
          path:':id',
          element :<Phone/>
        }
      ]
    },
    {
      path:'*',
      element:<Error/>
    }
  ])

  return (
    <>
    
      <RouterProvider router={router}/>
    </>
  )
}

export default App
