import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Home = () => {
  useGSAP(() => {
    gsap.fromTo('.home-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.5, duration: 1, ease: 'power2.inOut'}
    )

    gsap.fromTo('.home-text p',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, delay: 0.5, duration: 1, ease: 'power2.inOut'}
    )

    gsap.fromTo('.home-video',
      { scale: 1.1, opacity: 0},
      { scale: 1, opacity: 1, stagger: 0.5, duration: 1, delay: 1, ease: 'sine.inOut'}
    )
  });

  return (
    <section id="home" className="home">
      <div className="section-padding text-center">
        <div className="home-text mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl">Welcome to 
            <span className="font-bold text-primary"> Reminisce</span>
          </h1>
          <p className="text-3xl md:text-4xl">Your moments.
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
        <div className="home-video flex items-center justify-center">
          <video src="/videos/garden-walking.mp4" autoPlay muted loop playsInline></video>
        </div>
      </div>
    </section>
  )
}

export default Home