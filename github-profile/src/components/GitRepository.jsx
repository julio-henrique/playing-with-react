import { useEffect, useState } from "react"
// import { BsPersonCircle } from "react-icons/bs"

import styles from './styles.module.scss'

export function GitRepository() {
    const [ user, setUser ] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(user)

    const showUser = user.map(users => {
        const {login, avatar_url, id, html_url } = users
        return (
            <>
                <li key={id}><img src={avatar_url} className={styles.avatar} /></li>
                <li className={styles.name}>{login}</li>
                <a href={html_url}>Profile</a>
                <div className={styles.separator}></div>
            </>
                )
            })
            
            return (
                <>
         <section className={styles.gitContainer}>
             <ul>
                {showUser}
            </ul>
        </section>
        </>
    )
}