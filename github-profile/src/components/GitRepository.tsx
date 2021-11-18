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
        <div className={styles.gitContainer}>
            <div className={styles.content}>
            <BsPersonCircle className={styles.avatar}/>
            <h1>Arata Kasuga</h1>
            <h3>site kkk</h3>
            <h3>94</h3>
            <div /> 
            <BsPersonCircle />
            <h1>Arata Kasuga</h1>
            <h3>site kkk</h3>
            <h3>94</h3>
            <div /> 
            <BsPersonCircle />
            <h1>Arata Kasuga</h1>
            <h3>site kkk</h3>
            <h3>94</h3>
            <div /> 
        </div>
        </div>
    )
}