import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Home from './sections/Home'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App