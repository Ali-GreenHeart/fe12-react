import { useState, useEffect } from "react"

const colors = ['red', 'green', 'teal', 'gold', 'brown', 'blue']
let randomIndex;

const About = () => {
    const [name, setName] = useState('')
    useEffect(() => {
        randomIndex = Math.floor(Math.random() * colors.length)
    }, [name])
    return (
        <div style={{ backgroundColor: colors[randomIndex], height: '100vh' }}>
            <h1>heyyy {name}, welcome to About page</h1>
            <button onClick={() => setName(prompt('adinizi yazin'))}>change name</button>
        </div>
    )
}
export default About
