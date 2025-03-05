import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Content from './components/herocontent'
import Timer from './components/timer'
import Register from './components/register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black'>
        <Navbar />
        <Content />
        <Timer />
        <Register />
      </div>
    </>
  )
}

export default App
