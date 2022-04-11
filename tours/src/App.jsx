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

    function removeTour(id) {
        const filterTour = tours.filter(item => item.id !== id)
        setTours(filterTour)
    }

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

    if(tours.length === 0) {
        return (
            <main>
                <div className='title'>
                <h2>no tours left</h2>
                <button className='btn' onClick={fetchTours} >Refresh</button>
                </div>
            </main> 
        )
    }
    
    return (
        <main>
            <ToursIndex tours={tours} removeTour={removeTour} />
        </main>
    )
}

export default App
