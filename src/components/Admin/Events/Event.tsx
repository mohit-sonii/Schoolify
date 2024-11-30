// "use client"

import React from 'react'

type EventType = {
  typeOfEvent: 'General' | 'Specific',
  startDate: Date,
  endDate: Date | number,
  eventName: String,
  description: String,
  classId: String | any
}
const Event = ({
  typeOfEvent,
  startDate,
  endDate,
  description,
  classId,
  eventName
}: EventType) => {
  const oneDay = 24 * 60 * 60 * 1000
  const curr = new Date(Date.now()).getTime()
  const val = Math.abs(startDate.getTime() - curr)
  const res = val / oneDay
  return (
    <div className="w-full flex-wrap flex-col gap-2 flex bg-lightPurple p-4 rounded-lg shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]">
      {typeOfEvent === 'Specific'
        ? (
          <div className="flex justify-between items-center">
            <h1 className='text-sm font-semibold '>{typeOfEvent}</h1>
            <p className="text-xs font-semibold"> Class : {...classId}</p>
          </div>
        )
        : <h1 className='text-sm font-semibold '>{typeOfEvent}</h1>

      }
      <div className="flex-col lg:flex-row justify-between items-center">
        <h2 className="text-gray-700 font-bold text-sm">{eventName}</h2>
        <span className="text-xs">{parseInt(res.toString())} Days to go</span>
      </div>
      <p className="text-xs italic font-semibold text-gray-400">{description}</p>
      {/* <p>{startDate}</p> */}
    </div>

  )
}

export default Event