
"use client"

import RemoveTeacherForm from '@/components/AddPopUps/Teachers/[username]/RemoveTeacherForm'
import RemoveButton from '@/components/RemoveButton'
import useModalStore from '@/utils/store'
import React from 'react'

const Header = ({username}:{username:string}) => {

  const openModal = useModalStore((state) => state.openModal)

  const removeTeacherPage =  () => {
    openModal(
      <RemoveTeacherForm username={username} />
    )
  }

  return (
    <div className="flex w-max">
      <RemoveButton innerText={'Remove Teacher'} click={removeTeacherPage } />
    </div>
  )
}

export default Header