import { useEffect, useState } from "react"
import { BsPersonCircle } from "react-icons/bs"

import styles from './styles.module.scss'

export function GitRepository() {
    const [ user, setUser ] = useState()

    // useEffect(() => {
    //     const api = fetch('https://api.github.com/users/defunkt')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [] )

    return (
        <section className={styles.gitContainer}>
            <ul className={styles.profile}>
                <li><BsPersonCircle className={styles.avatar}/></li>
                <li className={styles.name}>Arata Kasuga</li>
                <li><a>site kkk</a></li>
                <li className={styles.repoNumber}>94</li>
                <div className={styles.separator} />
            </ul>
            <ul className={styles.profile}>
                <li><BsPersonCircle className={styles.avatar}/></li>
                <li className={styles.name}>Arata Kasuga</li>
                <li><a>site kkk</a></li>
                <li className={styles.repoNumber}>94</li>
                <div className={styles.separator} />
            </ul>
            <ul className={styles.profile}>
                <li><BsPersonCircle className={styles.avatar}/></li>
                <li className={styles.name}>Arata Kasuga</li>
                <li><a>site kkk</a></li>
                <li className={styles.repoNumber}>94</li>
                <div className={styles.separator} />
            </ul>
            <ul className={styles.profile}>
                <li><BsPersonCircle className={styles.avatar}/></li>
                <li className={styles.name}>Arata Kasuga</li>
                <li><a>site kkk</a></li>
                <li className={styles.repoNumber}>94</li>
                <div className={styles.separator} />
            </ul>
        </section>
    )
}