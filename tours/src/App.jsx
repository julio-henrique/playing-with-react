import React, { useState, useEffect } from 'react'
import { Loading } from './Loading'
import { ToursIndex } from './ToursIndex'

import './App.css'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const fetchTours = async () => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            setLoading(false)
            setTours(data)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTours()
    }, [])

    if(loading) return <Loading />


  /**
   * Se a tours.length for igual a 0
   * então mostre a página abaixo
    <main>
      <div className='title'>
      <h2>no tours left</h2>
      <button className='btn'></button>
      </div>
    </main> 
   */
    return (
        <main>
            <ToursIndex tours={tours} />
        </main>
    )
}

export default App
