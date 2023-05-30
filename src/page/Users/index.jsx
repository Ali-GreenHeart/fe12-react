import { users } from "./data"
import styles from "./index.module.css"

const Users = () => {
    return (
        <>
            <h1>Welcome to Users page!</h1>
            {
                users.map((user) => {
                    return (
                        <div className={styles.user} key={user.id}>
                            <h3 className={styles.heading}>{user.name}</h3>
                            <p className={styles.email}>{user.email}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Users
