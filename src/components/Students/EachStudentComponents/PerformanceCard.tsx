"use server"


import { Result } from "../EachStudent/EachStudentTypes";

const PerformanceCard = ({
  subjects,
  mayResults
  
}: {
  subjects: string[],
    mayResults: any
 
}) => {
  return (
    <div className="w-full bg-red-400 flex flex-col">
      <div className="w-full py-2">
        <h1 className="text-sm font-semibold text-gray-900">
          Performance Card
        </h1>
      </div>
      <table>
        <thead className="font-medium text-[10px] 2xl:text-xs text-black">
          <tr>
            <th>Subject Name</th>
            <th>May</th>
            <th>September</th>
            <th>December</th>
            <th>March</th>
            <th>Grand Total</th>
            <th>Percentage</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((val) => (
            <tr>
              <td>{val}</td>
              <td>{ }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PerformanceCard;
