import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Home = () => {
  useGSAP(() => {
    gsap.fromTo('.home-video',
      { scale: 1.1, opacity: 0},
      { scale: 1, opacity: 1, stagger: 0.5, duration: 1, delay: 1, ease: 'sine.inOut'}
    )
  });

  return (
    <section id="home" className="home">
      <div className="text-center">
        <div className="home-video flex items-center justify-center">
          <video src="/videos/rem-site-intro.mp4" autoPlay muted loop playsInline></video>
        </div>
      </div>
    </section>
  )
}

export default Home