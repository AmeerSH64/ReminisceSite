import React from 'react'

const TestimonialCard = ({ name, quote, image }) => {
  return (
    <div
      className='flex flex-col items-center justify-center gap-10 text-white p-10 min-h-[320px] bg-cover bg-center'
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h3 className='font-bold text-5xl text-shadow'>"{quote}"</h3>
      <p className='text-2xl'>{name}</p>
    </div>
  )
}

export default TestimonialCard