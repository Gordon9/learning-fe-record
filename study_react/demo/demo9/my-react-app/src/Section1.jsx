import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'


function Section1() {

  return (
    <div className="App">
     <Info />
     <About />
     <Interests />
     <Footer />
    </div>
  )
}

export default Section1
