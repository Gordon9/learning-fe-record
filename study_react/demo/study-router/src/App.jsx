import { Link, Route, Routes } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from '../public/components/Header'
import Footer from "../public/components/Footer"
import Profile from "../pages/profile/Profile"
import Info from "../pages/profile/Info"
import Settings from "../pages/profile/Setting"
import ServicesList from "../pages/services/ServicesList"
import ServiceDetail from "../pages/services/ServiceDetail"

function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/info" element={<Info />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/services" element={<ServicesList />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
