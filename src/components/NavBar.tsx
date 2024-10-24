
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full text-xs p-3 text-black'>
      <div className='flex gap-4 flex-row items-center justify-center'>
        <Image src={'/avatar.png'} alt="" width={20} height={20} className='rounded-full' />
        <span className="font-bold">Schoolify</span>
      </div>
      <div className='flex gap-6 w-auto items-center justify-center'>
        <div className='flex flex-col'>
          <span>Username</span>
          <span className='self-end'> Role</span>
        </div>
        <div className='w-max h-max'>
          <Image src={'/avatar.png'} alt="" width={14} height={14} className='rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default NavBar