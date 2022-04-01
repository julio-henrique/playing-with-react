import { useState } from 'react';
import data from './data';
import { List } from './List';

import './App.css'

export function App() {
  const [users, setUsers] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>{users.length} Anivesários hoje</h3>
        <List people={users} />
        <button onClick={() => setUsers([])}>Deletar todos</button>
        <button onClick={() => setUsers(data)}>Adicionar todos</button>
      </section>
      <a href="" target="_blank"></a>
    </main>
  )
}
