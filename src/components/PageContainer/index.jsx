const PageContainer = ({ children }) => {
    return (
        <>
            <nav>
                <a href="/">home</a>
                <a href="/about">about</a>
                <a href="/contact">contact</a>
                <a href="/mezunlar">mezunlar</a>
                <a href="/countries">countries</a>
            </nav>

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
