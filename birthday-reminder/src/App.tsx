import { useState } from 'react';
import data from './data';
import List from './List';

interface ListChildProps {
  people: []
}

interface ListChild {
  people: ListChildProps[] 
  id: number
  name: string
  image: string
  age: number
  length: () => void
}

function App() {
  const [ people, setPeople ] = useState<ListChild[]>(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        {/* <button onClick={() => setPeople([])}>Clear All</button> */}
      </section>
    </main>
  )
}

export default App;
