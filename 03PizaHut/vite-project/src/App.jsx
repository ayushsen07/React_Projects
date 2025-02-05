import { useState } from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/header/nav/nav.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[1200px] mx-auto p-4'>
      <Header/>
      <Nav/>
    </div>
  )
}

export default App
