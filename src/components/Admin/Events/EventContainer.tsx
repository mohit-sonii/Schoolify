import React from 'react'
import Event from './Event'
import prisma from '@/utils/db'

const EventContainer = async () => {
  const [eventRes, total] = await prisma.$transaction([
    prisma.event.findMany({ take: 3 }),
    prisma.event.count()
  ])


  return (
    <div className="flex w-full flex-col gap-2 ">
      <h1 className="text-gray-800 font-bold text-sm">Events</h1>
      {
        eventRes.map((val, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Event typeOfEvent={val.typeOfEvent} startDate={val.startDate} endDate={val.endDate} eventName={val.eventName} description={val.description} classId={val.classId?.toString()} />
          </div>
        ))
      }
      <div className='w-full flex justify-end items-center '>
        {total > 3 && <button className=" max-w-[130px] flex items-center justify-center relative  px-6 py-3 font-semibold text-white transition duration-300 ease-in-out bg-purple rounded-lg shadow-lg hover:bg-gray-600 ">See more</button>}
      </div>
    </div>
  )
}

export default EventContainer