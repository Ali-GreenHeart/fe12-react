import axios from "axios";
import { useEffect, useReducer } from "react"

const url = 'https://jsonplaceholder.typicode.com/users'

const reducer = (state, action) => {
    switch (action.type) {
        case "get_users":
            return action.payload;
        case 'sil_birinci':
            return state.slice(1)
        case 'delete':
            const newState = state.filter((user) => user.id !== action.payload)
            return newState
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
    console.log("users", users)
    return (
        <>
            <h1>welcome users with reducer page</h1>
            <button onClick={() => dispatch({ type: "sil_birinci" })}>remove first</button>
            {
                users.map((user) => {
                    return <p key={user.id}>{user.name}
                        <button onClick={() => dispatch({ type: 'delete', payload: user.id })}>x</button>
                    </p>
                })
            }
        </>
    )
}
export default UsersWithReducer
