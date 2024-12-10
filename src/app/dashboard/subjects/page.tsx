import CreateSubjectButton from '@/components/Subjects/CreateSubjectButton'
import { Divider } from '@mui/material'
import React from 'react'
import { ShowSubjects } from '../../../components/Subjects/ShowSubjects'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Schoolify | Subjects",
  description: "subjects",
};
const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Subjects</h1>
      <Divider />
      <div className="flex flex-col gap-5 w-full">
        <CreateSubjectButton />
        <Divider />
        <ShowSubjects />
      </div>
    </div>
  )
}

export default page