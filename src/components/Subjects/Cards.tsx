
const Cards = ({ classname, subjectList }: { classname: string, subjectList: string[] }) => {
  return (
    <div className="flex w-full  p-4 rounded-md  flex-wrap flex-col xl:flex-row ">
      <div className="w-full xl:w-[20%]  flex items-center justify-start">
        <h3 className="w-max rounded-md text-xs font-semibold px-4 py-2 bg-white ">{classname}</h3>
      </div>
      <div className="w-full xl:w-[80%] flex items-center justify-start flex-wrap gap-5">
        {subjectList.map((val) => (
          <p className="px-4 py-2 text-xs font-medium bg-white rounded-md ">{val}</p>
        ))}
      </div>
    </div>
  )
}
export default Cards