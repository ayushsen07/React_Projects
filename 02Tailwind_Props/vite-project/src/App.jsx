import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p class ="text-4xl bg-green-400 text-black p-4 mb-4">Tailwind test</p>
      <Card name="Bda Mogembo" tittle="S-Mongo"/>
      <Card name="Mogembo" tittle ="T-Mongo"/>

    </>
  )
}

export default App
