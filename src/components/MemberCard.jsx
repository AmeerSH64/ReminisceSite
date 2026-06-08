import React from 'react'

const MemberCard = ({ name, role, image }) => {
  return (
    <div className='bg-navbar rounded-xl flex flex-col items-center justify-center gap-3'>
      <img src={image} alt={name} className='w-80 rounded-t-xl' />
      <h3 className='font-bold text-2xl'>{name}</h3>
      <p className='text-black-200'>{role}</p>
    </div>
  )
}

export default MemberCard