import React from 'react'
import { Link , useNavigate } from 'react-router'
function About() {

    const navigate = useNavigate()

  function handleClick(){
    navigate('/')
  }


  return (
   <>
    <div className='text-3xl'>
      Welcome to the our About page
      <button onClick={handleClick}>Go To Home Page</button>

    </div>
   
   </>
   

  
  )
}

export default About