import { IconSend } from '@tabler/icons-react'
import React from 'react'
import { contactInfo } from '../constants'

const Contact = () => {
  return (
    <section id="contact" className='contact'>
        <div className="section-padding text-center">
            <h2 className="md:text-7xl text-3xl">Get in touch</h2>
            <p className="md:text-4xl mb-8">Have an idea? Let's 
                <span className="italic text-primary">discuss.</span>
            </p>
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="bg-navbar p-8 animate-fade-in animation-delay-300">
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
                            <button type="submit" className="flex flex-row gap-4 w-full">
                                Send Message <IconSend className="w-5 h-5 mt-1" />
                            </button>
                        </a>
                    </form>
                </div>

                <div className='space-y-6 animate-fade-in animation-delay-400'>
                    <div className='bg-navbar p-8'>
                        <h3 className='text-primary text-xl bold'>Contact Information</h3>
                        <div>
                        {contactInfo.map((item, i) => (
                            <a key={i} href={item.hrel}
                            className='flex items-center gap-4 p-4 hover:bg-secondary transition-colors group'>
                                <div className='w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors'>
                                    <item.icon className='w-5 h-5 text-primary' />
                                </div>
                                <div>
                                    <div className='text-sm text-primary group-hover:text-navbar transition-colors'>
                                        {item.label}
                                    </div>
                                    <div className='font-medium group-hover:text-white transition-colors'>{item.value}</div>
                                </div>
                            </a>
                        ))}
                        </div>
                    </div>
                    <div className='bg-navbar animate-fade-in aimation-delay-500 flex flex-col'>
                        <div className='flex items-center gap-2 p-10'>
                            <span className='w-3 h-3 rounded-full bg-green-400 animate-pulse' />
                            <span className='font-semibold text-2xl'>Currently Available</span>
                        </div>
                        <p className='text-lg pb-4'>
                            We are currently taking on new projects, please contact us for any enquiries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact