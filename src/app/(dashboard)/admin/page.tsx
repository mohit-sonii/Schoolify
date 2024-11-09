// import Cards from "@/components/Cards";
import GenderChartContainer from "@/components/Admin/GenderPieChart/GenderChartContainer";
import AttendanceChartContainer from "../../../components/Admin/AttendenceChart/AttendanceChartContainer";
// import BasicDateCalendar from "@/components/Calendar/Calender";
// import EventContainer from "@/components/Events/EventContainer";
import AdmissionChartContainer from "@/components/Admin/AdmissionChart/AdmissionChartContainer";
import OutstandingDuesContainer from "@/components/Admin/OutstandingDues/OutstandingDuesContainer";

const page = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full ">
      <div className="w-full lg:w-[70%] flex gap-8 flex-col">
        <div className="flex flex-wrap gap-2 justify-between items-center ">
          <AdmissionChartContainer />
        </div>
        <div className="flex flex-wrap gap-2 justify-between items-center ">
          <OutstandingDuesContainer />
        </div>
      </div>
      <div className="w-full lg:w-[25%] flex gap-4 flex-col">
        {/* <BasicDateCalendar/>
        <EventContainer/> */}
        <GenderChartContainer />
        <AttendanceChartContainer />
      </div>
    </div>
  )
}

export default page;