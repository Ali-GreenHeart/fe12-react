import { useState } from "react";
import About from "./page/About";

const App = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <button
                onClick={() => {
                    setShow(!show)
                }}
            >toggle</button>
            {
                show && <About />
            }
        </>
    )
}
export default App;

