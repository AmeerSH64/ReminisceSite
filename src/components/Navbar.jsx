const Navbar = () => {
  return (
    <header className="fixed w-full top-0">
      <div className="flex items-center justify-center backdrop-blur-2xl">
        <img src="/R-Text.png" alt="Reminisce Text" className="w-100" />
      </div>
      <div className="navbar">
        <div className="inner gap-10">
          <a href="#home" className="logo hover:scale-110 text-4xl">
            <img src="/Reminisce-logo.png" alt="Reminisce Logo" />
          </a>
          <nav className="desktop">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
            </ul>
          </nav>
          <a href="#contact">
            <button className="btn-primary">Contact Us</button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar