import { Route, Routes } from "react-router";
import About from "../page/About";
import Users from "../page/Users";

const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<div>salam contact page</div>} />
            <Route path="/mezunlar" element={<div>mezunlar....</div>} />
            <Route path="/tedris-saheleri" element={<div>tedris saheleri</div>} />
        </Routes>
    )
}

export default WebRouting;
