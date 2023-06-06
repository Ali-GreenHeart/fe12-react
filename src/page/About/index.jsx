import { useState, useEffect } from "react"
import PageContainer from "../../components/PageContainer";

const colors = ['red', 'green', 'teal', 'gold', 'brown', 'blue']
let randomIndex;

const About = () => {
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('men geldim...')
        return () => {
            console.log('ayyyyyyy ☠')
        }
    }, [])
    useEffect(() => {
        randomIndex = Math.floor(Math.random() * colors.length)
    }, [name])
    return (
        <PageContainer>
            <div style={{ backgroundColor: colors[randomIndex], height: '100vh' }}>
                <h1>heyyy {name}, welcome to About page</h1>
                <button onClick={() => setName(prompt('adinizi yazin'))}>change name</button>
            </div>
        </PageContainer>
    )
}
export default About
