import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Home from './sections/Home'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App