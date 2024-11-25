"use client"
import React from 'react'
import useModalStore from '@/utils/store'

const Modal = () => {
  const { isOpen, content } = useModalStore()
  if(!isOpen) return null
  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 z-50  flex items-center justify-center">
      <div className="bg-red-800 p-5 rounded-lg shadow-lg  w-[70%] h-auto  relative flex items-center justify-center m-auto">
        {content}
      </div>
    </div>
  )
}

export default Modal