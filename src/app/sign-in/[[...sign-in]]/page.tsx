import { SignIn } from '@clerk/nextjs'
import React from 'react'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Schoolify | Sign-In",
  description: "sign-in ",
};


const page = () => {

  return (
    <div className="flex justify-center  h-screen  items-center">
      <SignIn />
    </div>
  )
}

export default page