import { IconBrandInstagram, IconBrandTwitter, IconBrandTiktok, IconBrandFacebook } from '@tabler/icons-react'
import React from 'react'

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/reminisceeuk/", icon: IconBrandInstagram },
  { name: "Twitter", href: "https://twitter.com/reminisceeuk/", icon: IconBrandTwitter },
  { name: "TikTok", href: "https://www.tiktok.com/@reminisceeuk/", icon: IconBrandTiktok },
  { name: "Facebook", href: "https://www.facebook.com/reminisceeuk/", icon: IconBrandFacebook }
]

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer border-t border-black-200'>
      <div className='container px-6 mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='flex gap-4 text-center md:text-left'>
            <a href="#home">
              <img className='logo' src="/Reminisce-logo.svg" alt="Reminisce Logo" />
            </a>
            <p className='text-sm text-secondary mt-3'>
              &copy; {currentYear} Reminisce UK Ltd. All rights reserved.
            </p>
          </div>

          <div className='flex items-center gap-4'>
            {socials.map((social) => (
              <a key={social.name} href={social.link} aria-label={social.name}
              className='text-secondary rounded-full hover:text-primary hover:bg-navbar/20 transition-colors cursor-pointer'>
                <social.icon className="w-10 h-10"/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer