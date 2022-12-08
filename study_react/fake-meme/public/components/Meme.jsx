import { useState, useEffect } from 'react';
import sherlock__holmes from '../../src/assets/images/sherlock-holmes.webp'
import header__logo from '../../src/assets/images/Troll Face.png'
import memesData from '../../src/memesDats'


export default function Meme() {

  const [meme, setMeme] = useState({
      topText: '',
      bottomText: '',
      randomImage: '../../src/assets/images/sherlock-holmes.webp',
      // randomImage: 'sherlock__holmes',
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  // useEffect(() => {
  //   console.log('effect render');
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then(res => res.json())
  //     .then(data => setAllMemeImages(data.data.memes))
  // }, [])


  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, [])

  function handleChange(e) {
    e.preventDefault();
    const {name, value} = e.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  function getMemeImage(e) {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }))

  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top text" onChange={handleChange} value={meme.topText}  name='topText' />
        <input className="form--input" type="text" placeholder="Bottom text" onChange={handleChange} value={meme.bottomText} name='bottomText' />
        <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} alt="" className='meme--image' />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}