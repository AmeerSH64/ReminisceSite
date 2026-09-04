import { IconArrowDown, IconBrandInstagram } from "@tabler/icons-react";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const About = () => {

  const sectionRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useGSAP(() => {
    const parts = [sectionRef.current, titleRef.current, descriptionRef.current, image1Ref.current, image2Ref.current];
    parts.forEach((part, index) => {
      gsap.fromTo(part, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: part, start: "top 50%" }
        }
      )
    })
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="items-center text-center mx-auto">
        <h2 className="md:text-7xl text-4xl mt-10" ref={titleRef}>Weddings and photography</h2>
        <p className="text-2xl md:text-4xl mb-8" ref={titleRef}>What we do for 
          <span className="italic text-primary"> you.</span>
        </p>
        <div className="flex justify-center items-center flex-col lg:flex-row">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="about-top-images flex flex-row md:flex-col md:gap-5" ref={image1Ref}>
              <img src="/photos/deco-outside.webp" alt="Outside Decoration" 
              className="md:-translate-x-20 translate-x-5" />
              <img src="/photos/grey-bride-swing.webp" alt="Bride on Swing" 
                className="translate-y-20 md:-translate-y-30 -translate-x-5 md:translate-x-0" />
            </div>
            <div className="about-bottom-images flex flex-row md:flex-col md:gap-5" ref={image2Ref}>
              <img src="/photos/car-interior.webp" alt="Car Interior" 
              className="md:-translate-x-20 translate-x-5" />
              <img src="/photos/bride-window.webp" alt="Bride at Window" 
              className="translate-y-20 md:-translate-y-30 -translate-x-5 md:translate-x-0" />
            </div>
          </div>
          <div className="flex items-center flex-col gap-10" ref={descriptionRef}>
            <div className="about-text">
              <img src="/logo-main.png" alt="Main Logo" className="section-bg-logo" />
              <p>
                At Reminisce, we speicalise in freezing those fleeting moments in time that hold 
                immense significance for you. With our passion for photography and keen eye for 
                detail, we transform ordinary moments into extraordinary memories.
              </p>
              <p>
                Whether it's a milestone event, a candid portrait, or the breathtaking beauty of 
                nature, we strive to encapsulate the essense of every moment, ensuring that your 
                cherished memories last a lifetime. Trust us to capture the magic of your life's 
                journey, one frame at a time.
              </p>
            </div>
            <div className="flex flex-center">
              <a href="https://www.instagram.com/reminisceeuk/" target="_blank" rel="noopener noreferrer">
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">See our work</p>
                  <div className="arrow-wrapper">
                    <IconBrandInstagram className="size-5 translate-y-0 xl:-translate-y-32 
                    animate-bounce group-hover:translate-y-0 transition-all duration-500 text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About