import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Experience from './components/Experience'
import Venues from './components/Venues'
import Gallery from './components/Gallery'
import Differentiators from './components/Differentiators'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="bg-[#0A0A0B] text-[#8A857C] overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <StatsBar />
          <Experience />
          <Venues />
          <Gallery />
          <Differentiators />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App