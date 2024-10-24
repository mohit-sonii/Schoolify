import Cards from "@/components/Cards";
import GenderChartContainer from "@/components/GenderChartContainer";

const page = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="w-full lg:w-[70%] flex gap-4 flex-col">
        <div className="flex ">
          <Cards type="student" />
          <Cards type="admin" />
          <Cards type="teacher" />
        </div>
        <div className="w-full bg-orange-500">
          hi this is gender chart which is not visible
          <GenderChartContainer />
        </div>
      </div>
      <div className="w-full lg:w-[30%] flex gap-4">
        <Cards type="teacher" />
      </div>
    </div>
  )
}

export default page;