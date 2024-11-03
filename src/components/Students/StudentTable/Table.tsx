"use client"

import { StudentTable } from "./TableType"

export default function Table({ students }: { students: StudentTable[] }) {

// this was for Filter to select specific column

  // const itemsToKeepStill = ['StudentId', 'First Name', 'Class']
  // const removingPermananetFieldsForOption = students.map(obj => {
  //     const dup: any = { ...obj }
  //     itemsToKeepStill.forEach((val) => delete dup[val])
  //     return dup;
  //   })

  // const [currentOption, setCurrentOption] = useState("")
  // const [isOpen, setOpen] = useState<boolean>(false);

  // const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setCurrentOption(e.target.value)
  // }
    // <div className="w-full text-xs flex-col gap-2 flex  relative">
    //      <div className="flex gap-3">
    //       <button onClick={() => { setOpen(!isOpen) }} className="border-none outline-none px-4 py-2 rounded-lg shadow-lg text-gray-500 bg-white w-max flex jusitfy-between items-center">
    //         <span>Select Fields to Display</span>
    //         <Image
    //         src="/arrow.svg"
    //         alt=""
    //         width={14}
    //         height={14}
    //         />
    //       </button>
    //     </div>
    //     {isOpen && (
    //       <div className='top-full text-xs mt-2 py-2 px-4 absolute z-50 bg-white rounded-lg w-max '>
    //         {Object.entries(removingPermananetFieldsForOption[0]).map(([val, _]) => {
    //           return (
    //             <label key={val} className="flex gap-2 text-xs font-light text-gray-500 mb-2">
    //               <input
    //                 type="checkbox"
    //                 // checked={selectedCategories.includes(category.id)}
    //                 // onChange={() => handleCheckboxChange(category.id)}
    //                 className="mr-2 flex items-center "
    //               />
    //               {val}
    //             </label>
    //           )
    //         })}
    //       </div>
    //     )} 

    //   </div> 

  return (
   
    < div className = "w-full  h-max flex mb-4 show-table rounded-lg shadow-lg flex-col gap-2">
      <table className="min-w-full bg-white  border-gray-300 rounded-lg">
        <thead className="font-semibold text-xs text-gray-700">
          <tr>
            <th>Student Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Contact No.</th>
            <th>Admission Year</th>
            <th>Class</th>
            <th>Outstanding Fees</th>
          </tr>
        </thead>
        <tbody className="text-xs font-medium text-gray-600">
          {students.map((val: any) => (
            <tr key={val.Username} className="text-center">
              <td>{val.StudentId}</td>
              <td>{val["First Name"]}</td>
              <td>{val["Last Name"]}</td>
              <td>{val["Contact No"]}</td>
              <td>{val["Admission Year"]}</td>
              <td>{val.Class}</td>
              <td>{val["Fees Paid Upto"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div >

  )
}