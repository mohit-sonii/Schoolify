import { SignUp } from '@clerk/nextjs'
import React from 'react'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Schoolify | Sign-Up",
  description: "sign-up",
};

const page = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
      <SignUp/>
    </div>
  )
}

export default page