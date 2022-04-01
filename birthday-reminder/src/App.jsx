import { useState } from 'react';
import data from './data';
// import List from './List';

function App() {
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        {/* <button onClick={() => setPeople([])}>Clear All</button> */}
      </section>
      <a href="" target="_blank"></a>
    </main>
  )
}

export default App;
