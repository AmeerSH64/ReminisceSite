import { IconSend } from '@tabler/icons-react'
import { useRef } from 'react'
import { contactInfo } from '../constants';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const videoRef = useRef(null);

    useGSAP(() => {
        const parts = [sectionRef.current, titleRef.current, formRef.current, 
            infoRef.current, videoRef.current];
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
    <section id="contact" className='contact' ref={sectionRef}>
        <div className="section-padding text-center">
            <h2 className="md:text-7xl text-5xl" ref={titleRef}>Get in touch</h2>
            <p className="text-2xl md:text-4xl mb-8" ref={titleRef}>Have an idea? Let's
                <span className="italic text-primary"> discuss.</span>
            </p>
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto align-middle">
                <div className="bg-navbar p-8" ref={formRef}>
                    <form className="space-y-6">
                        <div>
                            <input type="text" placeholder="Name" className="input-field" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" className="input-field" />
                        </div>
                        <div>
                            <textarea placeholder="Message" className="input-field h-32"></textarea>
                        </div>
                        <a href="mailto:info@reminisceuk.com">
                            <button type="submit">
                                <div className='cta-button group'>
                                    <div className='bg-circle' />
                                    <p className='text'>Send Message</p> 
                                    <div className='arrow-wrapper'>
                                        <IconSend className="size-5 xl:-translate-y-32 
                                        translate-y-0 animate-bounce group-hover:translate-y-0 
                                        transition-all duration-500 text-white" />
                                    </div>
                                </div>
                            </button>
                        </a>
                    </form>
                </div>

                <div className='space-y-6' ref={infoRef}>
                    <div className='bg-navbar p-8'>
                        <h3 className='text-primary text-xl bold'>Contact Information</h3>
                        <div>
                        {contactInfo.map((item, i) => (
                            <a key={i} href={item.hrel}
                            className='flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors group'>
                                <div className='w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors'>
                                    <item.icon className='w-5 h-5 text-primary group-hover:text-navbar' />
                                </div>
                                <div>
                                    <div className='text-sm text-start text-primary group-hover:text-navbar transition-colors'>
                                        {item.label}
                                    </div>
                                    <div className='font-medium group-hover:text-white transition-colors'>{item.value}</div>
                                </div>
                            </a>
                        ))}
                        </div>
                    </div>
                    <div className='bg-navbar flex flex-col'>
                        <div className='flex items-center gap-5 p-10'>
                            <span className='w-3 h-3 rounded-full bg-green-400 animate-pulse' />
                            <span className='font-semibold text-2xl'>Currently Available</span>
                        </div>
                    </div>
                </div>
                <div className="contact-video lg:w-[66%]" ref={videoRef}>
                    <video src="/videos/mehndi-vertical.mov" autoPlay loop
                    muted playsInline />
                </div>
            </div>
        </div>
    </section>
  )
}
   
export default Contact