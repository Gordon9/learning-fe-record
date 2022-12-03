import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import Contact from './components/Contact'
import photo_felix from './assets/images/felix.png'
import photo_fluffykins from './assets/images/fluffykins.png'
import photo_mr_whiskerson from './assets/images/mr-whiskerson.png'
import photo_pumpkin from './assets/images/pumpkin.png'
import Katie_Zaferes from './assets/images/Katie-Zaferes.png'
import Joke from './components/Joke'
import jokesDats from './assets/jokesDats.js'
import data from './data'


function App() {


  // const jokeElements = jokesDats.map(joke => {
  //   return <Joke  setup={joke.setup} punchline={joke.punchline} />
  // })

  // console.log(jokeElements);


  const cards = data.map(card => {
    return (
      <Card 
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
      title={card.location}
      price={card.price}
      />
    )
  })

  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      {cards}

      {/* <div className='contacts'>
        <Contact
          img={photo_felix}
          name='sherlock'
          phone='000 0000000'
          email='sherlock@example.com'
        />
        <Contact
          img={photo_fluffykins}
          name='bach'
          phone='000 11111111'
          email='sherlock@example.com'
        />
        <Contact
          img={photo_mr_whiskerson}
          name='Mozart'
          phone='000 222222'
          email='sherlock@example.com'
        />
        <Contact
          img={photo_pumpkin}
          name='Chopin'
          phone='000 333333'
          email='sherlock@example.com'
        />
      </div> */}
    </div>

    // <div className="App">
    //   {jokeElements}
    // </div>


  )
}

export default App
