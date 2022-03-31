import { useEffect, useState } from "react"
import { BsPersonCircle } from "react-icons/bs"

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
                <p className={styles.name}>{login}</p>
                <a href={html_url}>Profile</a>
            </>
                )
            })
            
            return (
                <>
         <section className="gitContainer">
             <ul className={styles.profile} >
                {showUser}
            </ul>
        </section>
        </>
    )
}