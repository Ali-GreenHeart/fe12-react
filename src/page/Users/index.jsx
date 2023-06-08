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
                            <button
                                onClick={() => {
                                    const otherUsers = users.filter((elem) => elem.id !== id)
                                    setUsers(otherUsers)
                                }}
                                className={styles.removeBtn}>x</button>
                            <button
                                onClick={() => {
                                    const newName = prompt('yeni adi daxil edin', name)
                                    const changedUsers = users.map((elem) => {
                                        if (elem.id === id) {
                                            return { ...elem, name: newName }
                                        }
                                        return elem;
                                    })
                                    setUsers(changedUsers)
                                }}
                                className={styles.removeBtn}>🖊</button>

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
