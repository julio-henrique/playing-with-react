import { useState } from 'react'
import { Meme } from './components/Meme'
import { Header } from './components/Header'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Meme />
      <Header />
    </div>
  )
}

export default App
