"use client"
import React from 'react'
import Button from '../Button'
import useModalStore from '@/utils/store'
import SubjectForm from '../AddPopUps/Subjects/SubjectForm'

const CreateSubjectButton = () => {

  const openModal = useModalStore((state) => state.openModal)
  const subjectPage = () => {
    openModal(
      <SubjectForm />
    )
  }
  return (

    <div className="flex w-full items-center">
      <Button innerText="Create Subject" click={subjectPage} />
    </div>
  )
}

export default CreateSubjectButton