"use server"

import Image from 'next/image'

const FirstRow = ({
  firstname,
  lastname,
  gender,
  mothername,
  fathername,
  contact,
  address
}: {
  firstname: string,
  lastname: string,
  gender: 'Male' | 'Female',
  mothername: string,
  fathername: string,
  contact: string,
  address: string
}) => {
  return (
    <div className="flex gap-3 flex-col lg:flex-row w-full justify-between">
      <div className="w-max h-max flex  items-center justify-center gap-3">
        <Image
          src="/student.svg"
          width={100}
          height={100}
          alt="Student Image"
        />
      </div>
      <div className="w-max  h-max flex  flex-col justify-between gap-3">
        <h1 className="text-sm font-semibold text-gray-900">
          Student Information
        </h1>
        <div className="flex flex-col gap-2 text-xs font-light">
          <h3 className="font-medium text-gray-700">
            Full name : <span className="font-normal text-gray-500">{`${firstname} ${lastname}`}</span>
          </h3>
          <h3 className="font-medium text-gray-700">
            Date of birth : <span className="font-normal text-gray-500">7/10/2012</span>
          </h3>
          <h3 className="font-medium text-gray-700">
            Gender : <span className="font-normal text-gray-500">{`${gender}`}</span>
          </h3>
          <h3 className="font-medium text-gray-700">
            Mother name : <span className="font-normal text-gray-500">{`${mothername}`}</span>
          </h3>
          <h3 className="font-medium text-gray-700">
            Father name : <span className="font-normal text-gray-500">{`${fathername}`}</span>
          </h3>
        </div>
      </div>
      <div className="w-max h-full  flex flex-wrap flex-col gap-3 ">
        <h1 className="text-sm font-semibold text-gray-900">
          Contact Information
        </h1>
        <div className="flex flex-col gap-2 text-xs font-light">
          <h3 className="font-medium text-gray-700">
            Contact Number : <span className="font-normal text-gray-500">{`${contact}`}</span>
          </h3>
          <h3 className="font-medium text-gray-700">
            Address : <span className="font-normal text-gray-500">{`${address}`}</span>
          </h3>
        </div>
      </div>
    </div>

  )
}
export default FirstRow