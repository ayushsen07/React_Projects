import React from 'react'
import { Outlet } from 'react-router'
function Contact() {
  return (
    <>
    <div className='text-3xl'>
      Welcome to the our Contact page
    </div>
    <Outlet/>
   
   </>
  )
}

export default Contact