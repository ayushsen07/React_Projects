import { useState } from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/nav.jsx'
import Info from './components/info/info.jsx'


function App() {
  const [activeTab , setActiveTab] = useState('pizzas')

  return (
    <div className='w-[1200px] mx-auto p-4'>
      <Header/>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Info activeTab={activeTab} />
    </div>
  )
}

export default App
