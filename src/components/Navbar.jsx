import { IconMenu2 } from "@tabler/icons-react";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Navbar = () => {
    useGSAP(() => {
        gsap.fromTo('header',
            { opacity: 0 },
            { opacity: 1, stagger: 0.5, duration: 1, ease: 'power1.inOut'}
        )
        gsap.fromTo('.home-text h1',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.5, delay: 0.5, duration: 1, ease: 'power2.inOut'}
        )

        gsap.fromTo('.home-text p',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, delay: 1.0, duration: 1, ease: 'power2.inOut'}
        )
    });

  return (
    <header className="relative w-full top-0 z-10">
      <nav className="navbar">
            <div className="nav-header md:hidden">
                <div className="nav-logo">
                    <a href="#">
                        <img src="/R-Text.png" alt="Reminisce Logo" className="logo" />
                    </a>
                </div>
            </div>
            <ul className="nav-links" id="nav-links">
                <li><a href="#about">ABOUT US</a></li>
                <li><a href="#gallery">GALLERY</a></li>
                <li>
                    <a href="#home">
                        <img src="/logo-white.png" alt="White Logo" className="logo hidden md:block max-w-37.5 mt-5" />
                    </a>
                </li>
                <li><a href="#testimonials">TESTIMONIALS</a></li>
                <li><a href="#contact">CONTACT US</a></li>
            </ul>
      </nav>
      <div className="home-text max-md:absolute max-md:left-1/2 max-md:top-1/2 max-md:w-full max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:px-4 md:mt-30 mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-7xl text-white">Welcome to 
            <span className="font-bold text-primary text-shadow-navbar"> Reminisce</span>
        </h1>
        <p className="flex flex-wrap items-center justify-center gap-2 text-white text-2xl md:text-4xl">Your moments.
            <span className="slide">
              <span className="wrapper">
                {words.map((word) => (
                  <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                    <span className="italic text-primary">{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
        </p>
      </div>
    </header>
  )
}

export default Navbar