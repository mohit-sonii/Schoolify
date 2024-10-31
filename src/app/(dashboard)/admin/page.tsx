import Cards from "@/components/Cards";
import GenderChartContainer from "@/components/GenderPieChart/GenderChartContainer";
import AttendanceChartContainer from "../../../components/AttendenceChart/AttendanceChartContainer";
import BasicDateCalendar from "@/components/Calendar/Calender";
import EventContainer from "@/components/Events/EventContainer";
import AdmissionChartContainer from "@/components/AdmissionChart/AdmissionChartContainer";

const page = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full ">
      <div className="w-full lg:w-[70%] flex gap-8 flex-col">
        <div className="flex flex-wrap gap-2 justify-between items-center ">
          <AdmissionChartContainer />
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