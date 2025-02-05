import React from 'react'

function Card({image, title, description}) {
    
  return (
    <div className='mt-4 w-[300px] border-[#BBBBBB] border'>
        <img  className='w-[100%]' src={image} alt="pizza" />
        <p className='font-semibold text-center text-[20px]'>{title}</p>
        <p className='mt-2'>{description}</p>

        <button className=' my-2 w-[100%] bg-green-400 rounded p-3'>View More</button>
    </div>
  )
}

export default Card