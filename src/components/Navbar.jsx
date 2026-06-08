const Navbar = () => {
  return (
    <header className="navbar">
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
              <a href="#team">Team</a>
            </li>
          </ul>
        </nav>
        <a href="#contact">
          <button className="btn-primary">Contact Us</button>
        </a>
      </div>
    </header>
  )
}

export default Navbar