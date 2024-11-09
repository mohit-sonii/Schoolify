const SecondRow = ({ subjects, teachers }: { subjects: string[], teachers: string[] }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3">
      {/* For Subjects */}
      <div className="w-full lg:w-[50%] flex flex-col gap-3">
        <h1 className="text-sm font-semibold text-gray-900">Subjects</h1>
        <div className="flex gap-3 ">
          {subjects.map((val) => (
            <span key={val} className="text-gray-600 font-light text-xs rounded-md px-4 py-2 odd:bg-orange-200 even:bg-amber-200 w-max">{val}</span>
          ))}
        </div>
      </div>
      {/* For Teacher */}
      <div className="w-full lg:w-[50%] flex flex-col gap-3">
        <h1 className="text-sm font-semibold text-gray-900">Subject Teachers</h1>
        <div className="flex gap-3 ">
          {teachers.map((val) => (
            <span key={val} className="text-gray-600 font-light text-xs rounded-md px-4 py-2 odd:bg-orange-200 even:bg-amber-200 w-max">{val.charAt(0).toUpperCase().concat(val.substring(1))}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SecondRow;
