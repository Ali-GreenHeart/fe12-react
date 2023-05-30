import axios from "axios"
import { useEffect, useState } from "react"

const url = 'https://jsonplaceholder.typicode.com/posts'

const Posts = ({ }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // (async function () {
        //     const { data } = await axios.get(url)
        //     setPosts(data)
        // })()
        axios.get(url).then(({ data }) => {
            setPosts(data)
        })
    }, [])

    return (
        <>

            {
                posts.map(({ title, id }) => {
                    return (
                        <div key={id}>
                            <p>{title}</p>
                        </div>
                    )
                })
            }

        </>
    )
}
export default Posts
