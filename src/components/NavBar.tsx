"use client"
import Image from 'next/image'
import React from 'react'
import { useUser, UserButton }  from '@clerk/nextjs'

const NavBar = () => {
  const { user } = useUser()

  return (
    <div className='flex justify-between items-center w-full text-xs p-3 text-black'>
      <div className='flex gap-4 flex-row items-center justify-center'>
        <Image src={'/favicon.png'} alt="" width={50} height={50} className='rounded-full' />
        <span className="font-bold">Schoolify</span>
      </div>
      <div className='flex gap-6 w-auto items-center justify-center'>
        <div className='flex flex-col'>
          <span className=" font-bold">{user?.username}</span>
          <span className='self-end text-[10px]'>Admin</span>
        </div>
        <div className='w-max h-max'>
          <UserButton />
        </div>
      </div>
    </div>
  )
}

export default NavBar