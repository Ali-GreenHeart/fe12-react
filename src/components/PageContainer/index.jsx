import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

const PageContainer = ({ children }) => {

    const obj = useContext(DataContext)

    return (
        <>
            <nav>
                <a href="/">home</a>
                <a href="/about">about</a>
                <a href="/contact">contact</a>
                <a href="/mezunlar">mezunlar</a>
                <a href="/countries">countries</a>
            </nav>
            <p>I'm {obj.ad}</p>
            <main>
                {children}
            </main>

            <footer>
                <p>made with ♥</p>
            </footer>
        </>
    )
}
export default PageContainer
