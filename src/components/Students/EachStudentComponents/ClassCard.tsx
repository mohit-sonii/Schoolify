"use server"

const ClassCard = ({ classname, group, total }: { classname: string, group: string, total: number }) => {
  return (
    <div className=" rounded-lg p-4 w-full bg-amber-200 text-xs flex flex-col items-center justify-center h-max gap-3">
      <h1 className="text-sm font-semibold text-gray-900 ">Class Details</h1>
      <div className="flex flex-col gap-2 text-xs font-light  w-full ">
        <h3 className="font-semibold text-gray-700">
          Class : <span className="font-normal text-gray-500">{`${classname}`}</span>
        </h3>
        <h3 className="font-semibold text-gray-700">
          Group : <span className="font-normal text-gray-500">{`${group}`}</span>
        </h3>
        <h3 className="font-semibold text-gray-700">
          Total Strength : <span className="font-normal text-gray-500">{`${total}`}</span>
        </h3>
      </div>
    </div>
  )
}
export default ClassCard