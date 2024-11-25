import React from 'react'
import { Menu } from '@/components/Menu'
import NavBar from '@/components/NavBar'
import Modal from '@/components/Modal'

export default function DashBoardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="h-screen flex flex-col">
        <NavBar />
        <div className="flex h-full w-full">
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] text-xs">
            <Menu />
          </div>
          <div className=" w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] p-2">
            {children}
            <Modal/>
          </div>
        </div>
      </div>
    </>
  )
}