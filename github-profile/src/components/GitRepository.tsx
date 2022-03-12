import { useEffect, useState } from "react"
import { BsPersonCircle } from "react-icons/bs"

import styles from './styles.module.scss'

interface GitProps {
    login: string
    id: number
    avatar: string
    public_repos: number
    url: string
}

export function GitRepository() {
    const [ user, setUser ] = useState()

    useEffect(() => {
        const api = fetch('https://api.github.com/users/defunkt')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [] )

    return (
        <section className={styles.gitContainer}>
            <ul className={styles.profile}>
                <li><BsPersonCircle className={styles.avatar}/></li>
                <li>
                    <h1>Arata Kasuga</h1>
                </li>
                <li>
                    <a>site kkk</a>
                </li>
                <li>
                    <h3>94</h3>
                </li>
                <div className={styles.separete} />
                <li><BsPersonCircle className={styles.avatar}/></li>
                <li>
                    <h1>Arata Kasuga</h1>
                </li>
                <li>
                    <a>site kkk</a>
                </li>
                <li>
                    <h3>94</h3>
                </li>
                <div />
                <li><BsPersonCircle className={styles.avatar}/></li>
                <li>
                    <h1>Arata Kasuga</h1>
                </li>
                <li>
                    <a>site kkk</a>
                </li>
                <li>
                    <h3>94</h3>
                </li>
                <div />
                <div />
            </ul>
        </section>
    )
}