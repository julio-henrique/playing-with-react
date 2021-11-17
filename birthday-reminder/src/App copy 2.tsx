import { BsPersonBoundingBox } from 'react-icons/bs'

import styles from './App.module.scss'


function App() {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>5 birthdays today</h1>
        <div className={styles.contentBirth}>
          {/* <img src="" alt="" /> */}
          <BsPersonBoundingBox />
          <h3>Arata Kasuga</h3>
          <span>16 Years</span>
          <div className={styles.line} />
          <BsPersonBoundingBox  />
          <h3>Kazumo Satou</h3>
          <span>18 Years</span>
        </div>
      </div>
      <button>Clear All</button>
    </div>
  )
}

export default App
