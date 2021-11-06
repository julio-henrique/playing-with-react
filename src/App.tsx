import { useEffect, useState } from 'react'
import { Loading } from './components/Loading'
import { Tours } from './components/Tours'

import styles from './styles.module.scss'

export function App() {
  const [ loading, setLoading ] = useState(true)
  

  return loading ? (
    <main>
      <Loading />
    </main>
  ) : (
      <Tours  />
  )
}
