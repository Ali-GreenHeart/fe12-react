import { Route, Routes } from "react-router";
import About from "../page/About";
import Users from "../page/Users";
import Home from "../page/Home";
import Contact from "../page/Contact";
import Countries from "../page/Countries";
import UsersWithReducer from "../page/UsersWithReducer";

const WebRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users-with-reducer" element={<UsersWithReducer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mezunlar" element={<div>mezunlar....</div>} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/tedris-saheleri" element={<div>tedris saheleri</div>} />
            <Route path="*" element={<p>Not found 404!</p>} />
        </Routes>
    )
}

export default WebRouting;
