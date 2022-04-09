import { useState, useEffect } from 'react'
import { Loading } from './components/Loading'
import { Tours } from './components/Tours'

interface ToursPropsApp { 
  id: number
  name: string
  info: string
  image: string
  price: number
}

const url = 'https://course-api.com/react-tours-project'
export function App() {
  const [ loading, setLoading ] = useState(true)
  const [ tours, setTours ] = useState<ToursPropsApp[]>([])

  const removeTour = (Tourid: number) => {
    const newTours = tours.filter((tour) => tour.id !== Tourid)
    setTours(newTours)
  }
  
  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {fetchTours()}, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button onClick={fetchTours} className='btn'>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
