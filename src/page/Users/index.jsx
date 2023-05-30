import axios from "axios"
import styles from "./index.module.css"
import { useEffect, useState } from "react"

const url = 'https://jsonplaceholder.typicode.com/users'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setUsers(data)
        })
    }, [])

    return (
        <>
            <h1>Welcome to Users page!</h1>
            {
                users.map(({ id, name, email, company }) => {
                    return (
                        <div className={styles.user} key={id}>
                            <h3 className={styles.heading}>{name}</h3>
                            <p className={styles.email}>{email}</p>
                            <p className={styles.email}>-- {company.name} --</p>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Users
