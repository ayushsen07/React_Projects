import React from 'react'
import { useState } from 'react'

function Nav() {
    const [activeTab , setActiveTab] = useState('pizzas')
  return (
    <div className='my-3 flex border'>
        <div className={`w-[20%] text-center py-2 border-t-0 border-l-0 border-b-0 border ${activeTab==='pizzas' ? 'bg-red-400' : null}`} onClick={()=>setActiveTab('pizzas')} >Pizzas</div>
        <div className={`w-[20%] text-center py-2 border-t-0 border-l-0 border-b-0 border ${activeTab==='sides' ? 'bg-red-400' : null}`} onClick={()=>setActiveTab('sides')} > Sides</div>
        <div className={`w-[20%] text-center py-2 border-t-0 border-l-0 border-b-0 border ${activeTab==='desserts' ? 'bg-red-400' : null}`} onClick={()=>setActiveTab('desserts')} >Desserts</div>
        <div className={`w-[20%] text-center py-2 border-t-0 border-l-0 border-b-0 border ${activeTab==='drinks' ? 'bg-red-400' : null}`} onClick={()=>setActiveTab('drinks')}> Drinks</div>
        <div className={`w-[20%] text-center py-2 border-t-0 border-l-0 border-b-0 border ${activeTab==='deals' ? 'bg-red-400' : null} `} onClick={()=>setActiveTab('deals')} >Deals</div>
    </div>
  )
}

export default Nav