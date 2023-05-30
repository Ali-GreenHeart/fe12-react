import { useState } from "react";

const images = [
    "shir (1).avif",
    "shir (2).avif",
    "shir (3).avif",
    "shir (4).avif",
]
const Gallery = () => {
    const [index, setIndex] = useState(0)

    const pre = () => {
        if (index === 0) {
            setIndex(images.length - 1)
        } else {
            setIndex(index - 1)
        }
    }
    const next = () => {
        if (index === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <>
            <img src={"/img/" + images[index]} alt="" />
            <button onClick={pre}>{"<"}</button>
            <button onClick={next}>{">"}</button>
        </>
    )
}

export default Gallery;
