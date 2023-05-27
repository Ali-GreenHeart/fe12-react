import UserCard from "./UserCard";

const App = () => {
    return (
        <div className="usercard-container">
            <UserCard isMan ad="idris" img="https://images.unsplash.com/photo-1585856141833-ca095e957dd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <UserCard isMan ad="ali" img="https://images.unsplash.com/photo-1589652045525-4496b6099023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <UserCard isMan ad="eyyub" img="https://images.unsplash.com/photo-1570264013623-796051486fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            <UserCard isMan ad="samir" img="https://images.unsplash.com/photo-1602652295575-fe1b47cff6b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            <UserCard ad="aydan" img="https://images.unsplash.com/photo-1629261185806-97ba668eb7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
    )
}
export default App;

