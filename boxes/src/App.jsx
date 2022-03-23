import { useState } from "react"
import boxes from "./boxes"
import { Box } from "./components/Box"

import './App.css'

export default function App() {
  const [squares, setSquares] = useState(boxes)

  function toggle(id) {
    setSquares(prevSquare => {
      return prevSquare.map(item => {
        return (item.id === id) ? {...item, on: !item.on} : item
      })
    })
  }

  const squareElements = squares.map(square => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={toggle}
    />
  ))

  return (
    <main>
      {squareElements}
    </main>
  )
}