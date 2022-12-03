import Header from '../public/components/Header'
import Card from '../public/components/Card'
import './App.css'
import data from './travel_data'

function App() {

  const cards = data.map(item => {
    return (
      <Card key={item.title} {...item} />
    )
  })

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  )
}

export default App
