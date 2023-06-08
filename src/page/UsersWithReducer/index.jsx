import axios from "axios";
import { useEffect, useReducer } from "react"
import styles from "./index.module.css"


const url = 'https://jsonplaceholder.typicode.com/users'

const reducer = (state, action) => {
    switch (action.type) {
        case 'delete':
            const newState = state.filter((user) => user.id !== action.payload)
            return newState
        case "get_users":
            return action.payload;
        case 'sil_birinci':
            return state.slice(1)
        case 'edit':
            const newName = prompt('yeni adi daxil edin: ', action.payload[0])
            const changedUsers = state.map((elem) => {
                if (elem.id === action.payload[1]) {
                    return { ...elem, name: newName }
                }
                return elem;
            })
            return changedUsers;
        default:
            return state;
    }
}

const UsersWithReducer = () => {
    const [users, dispatch] = useReducer(reducer, [])
    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({ type: "get_users", payload: data })
        })
    }, [])
    return (
        <>
            <h1>welcome users with reducer page</h1>
            <button onClick={() => dispatch({ type: "sil_birinci" })}>remove first</button>
            {
                users.map(({ id, name, email, company }) => {
                    return (
                        <div className={styles.user} key={id}>
                            <button
                                onClick={() => dispatch({ type: 'delete', payload: id })}
                                className={styles.removeBtn}>x</button>
                            <button
                                onClick={() => dispatch({ type: 'edit', payload: [name, id] })}
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
export default UsersWithReducer
