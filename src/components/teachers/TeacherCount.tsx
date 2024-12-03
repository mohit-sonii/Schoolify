
"use client"
import { Divider } from '@mui/material'
import Button from '../Button';
import useModalStore from '@/utils/store';
import TeacherForm from '../AddPopUps/Teachers/TeacherForm';
import { useEffect,useState } from 'react';
import { teacherCount } from './Functions';

const TeacherCount = ({ value }: { value: number }) => {

  const [currState,setCurrState] = useState<number>(value)
  const openModal = useModalStore((state) => state.openModal)

  const currValue = useModalStore((state)=>state.teacherRenderState)
  const teacherPage = () => {
    openModal(
      <TeacherForm />
    )
  }
  
  useEffect(() => {
    const fetch = async () => {
      return await teacherCount()
    }
    fetch().then((val)=>setCurrState(val))
  },[currValue])

  return (
    <div className="flex  w-full xl:w-[70%] gap-4 justify-between ">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
            Total Teachers
            <span className="text-[10px] font-light text-gray-500">
              Till Now
            </span>
          </h3>
        </div>
        <h1 className='w-max text-2xl font-bold text-gray-800'>{`${currState}`}</h1>
      </div>
      <div className="flex w-full justify-end ">
        <Button innerText="Add Teacher" click={teacherPage} />
      </div>
      <Divider orientation="vertical" />
    </div >

  );
};

export default TeacherCount;
