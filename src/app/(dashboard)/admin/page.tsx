import Cards from "@/components/Cards";
import GenderChartContainer from "@/components/GenderPieChart/GenderChartContainer";
import AttendanceChartContainer from "../../../components/AttendenceChart/AttendanceChartContainer";
import Create from "@/components/buttons/Create";

const page = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full ">
      <div className="w-full lg:w-[70%] flex gap-8 flex-col">
        <div className="flex flex-wrap gap-2 justify-between items-center ">
          <Cards type="student" />
          <Cards type="admin" />
          <Cards type="teacher" />
          <Cards type="class" />
        </div>
        <div className="w-full flex justify-between gap-2 h-[60%]">
          <div className="w-full lg:w-[48%] h-full ">
            <GenderChartContainer />
          </div>
          <div className="w-full lg:w-[48%] h-full ">
            <AttendanceChartContainer />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[25%] flex gap-4">
        <Create innerText={'Teacher'}/>
      </div>
    </div>
  )
}

export default page;