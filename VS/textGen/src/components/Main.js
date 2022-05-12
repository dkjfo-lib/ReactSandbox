import { func } from "prop-types";
import React from "react";
import dataArray from "../memesData";

export default function Main() {
  const [meme, setMeme] = React.useState({
    url: "https://i.imgflip.com/30b1gx.jpg",
    topText: "top text",
    bottomText: "bottom text",
  });
  const [memeCount, setMemeCount] = React.useState(0);

  function getNewImg() {
    const data = dataArray.data.memes;
    const imgData = data[Math.floor(Math.random() * data.length)];
    setMeme(prevMeme => ({
        ...prevMeme,
        url: imgData.url
    }));
    setMemeCount((prevMemeCount) => prevMemeCount + 1);
  }

  function changeTopText() {
    const input = document.getElementsByClassName("input-field")[0].getElementsByTagName('input')[0];
    setMeme(prevMeme => ({
        ...prevMeme,
        topText: input.value
    }));
  }

  function changeBottomText() {
    const input = document.getElementsByClassName("input-field")[1].getElementsByTagName('input')[0];
    console.log(input)
    setMeme(prevMeme => ({
        ...prevMeme,
        bottomText: input.value
    }));
  }

  return (
    <div className="main">
      <div className="inputs">
        <div className="input-field">
          <input onChange={changeTopText} placeholder="top-text"></input>
        </div>

        <div className="input-field">
          <input onChange={changeBottomText} placeholder="bottom-text"></input>
        </div>
      </div>

      <button className="get-image" onClick={getNewImg}>
        <p>Get a new image 🖼</p>
      </button>

      <div>
        <p>memes created {memeCount}</p>
      </div>

      <div className="meme-preview">
        <p className="top-text">{meme.topText}</p>
        <img src={meme.url} alt="meme-preview" />
        <p className="bottom-text">{meme.bottomText}</p>
      </div>
    </div>
  );
}
