import { useState } from "react"

const songs = [
  {
    img: "shir (1).avif",
    mp3: "gupsecafe"
  },
  {
    img: "shir (2).avif",
    mp3: "goyuzu"
  },
  {
    img: "shir (1).avif",
    mp3: "soyuqgunes"
  },
  {
    img: "shir (3).avif",
    mp3: "hercai"
  },
  {
    img: "shir (4).avif",
    mp3: "kolay"
  },
  {
    img: "shir (3).avif",
    mp3: "karanlik"
  }
]

const Mp3 = () => {
  const [index, setIndex] = useState(0)

  const pre = () => {
    if (index === 0) {
      setIndex(songs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const next = () => {
    if (index === songs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <>
      <div class="mp3-container">
        <div class="sound-foto">
          <img src={"/img/" + songs[index].img} alt="" />
          <p> {songs[index].mp3} by aydan</p>
          <audio src={"/songs/" + songs[index].mp3 + '.mp3'} controls></audio>
        </div>
        <div>
          <button onClick={pre}>{"<"}</button>
          <button onClick={next}>{">"}</button>
        </ div>
      </div>
    </>
  )
}

export default Mp3;
