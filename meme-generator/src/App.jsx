import { useState } from 'react'
import { Meme } from './components/Meme'
import { Header } from './components/Header'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const fatorial = (num) => {
    if(num === 0 || num < 0) return console.log('o número deve ser acima de 0 e positivo')
    let total = 1
    for(let i = 1; i <= num; i++) {
        total = total * i
    }
    return total
  }



  return (
    <div className="">
      <Meme />
      <Header />

      <button onClick={() => fatorial(5)}>fatorial</button>
    </div>
  )
}

export default App
