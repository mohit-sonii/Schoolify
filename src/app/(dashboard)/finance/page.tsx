import FeeBreakdown from "@/components/Finance/FeeBreakdown";
import OutstandingFeesTotal from "@/components/Finance/OutstandingFeesTotal";
import OutstandingPerClass from "@/components/Finance/OutstandingPerClass";
import TotalCollectionFromFees from "@/components/Finance/TotalCollectionFromFees";
import TotalOutstandingSalary from "@/components/Finance/TotalOutstandingSalary";
import TotalSalaryPaid from "@/components/Finance/TotalSalaryPaid";
import Divider from "@mui/material/Divider";

const page = async () => {

  return (
    <div className="w-full flex justify-between">
      {/*70 % column */}
      <div className="w-full xl:w-[65%] flex-col flex gap-5 ">
        <OutstandingFeesTotal />
        <Divider />
        <TotalCollectionFromFees />
        <Divider />
        <OutstandingPerClass />
        <Divider />
      </div>
      <div className="w-full xl:w-[30%]  flex  flex-col gap-5">
        <FeeBreakdown />
        <Divider />
        <TotalSalaryPaid/>
        <Divider />
        <TotalOutstandingSalary />
      </div>
    </div>
  );
};
export default page;
