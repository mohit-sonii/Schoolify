"use client"
import React from 'react'
import useModalStore from '@/utils/store'

const Modal = () => {
  const { isOpen, content } = useModalStore()
  if(!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50  flex items-center justify-center">
      <div className="p-5  rounded-lg shadow-lg  w-[70%] relative flex items-center justify-center m-auto h-[80%] flex-col overflow-y-auto">
        {content}
      </div>
    </div>
  )
}

export default Modal