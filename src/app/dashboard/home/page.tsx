// import Cards from "@/components/Cards";
import GenderChartContainer from "@/components/Admin/GenderPieChart/GenderChartContainer";
import AttendanceChartContainer from "../../../components/Admin/AttendenceChart/AttendanceChartContainer";
import AdmissionChartContainer from "@/components/Admin/AdmissionChart/AdmissionChartContainer";
import OutstandingDuesContainer from "@/components/Admin/OutstandingDues/OutstandingDuesContainer";
import { Divider } from "@mui/material";

const page = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full ">
      <div className="w-full lg:w-[70%] flex gap-8 flex-col">
        <h1 className="font-bold text-xl">Summary</h1>
        <Divider />
        <div className="flex flex-wrap gap-2 justify-between items-center ">
          <AdmissionChartContainer />
        </div>
        <Divider />
        <div className="flex flex-wrap gap-2 justify-between items-center ">
          <OutstandingDuesContainer />
        </div>
      </div>
      <Divider />
      <div className="w-full lg:w-[25%] flex gap-4 flex-col">
        {/* <BasicDateCalendar/>
        <EventContainer/> */}
        <GenderChartContainer />
        <Divider />
        <AttendanceChartContainer />
      </div>
    </div>
  )
}

export default page;