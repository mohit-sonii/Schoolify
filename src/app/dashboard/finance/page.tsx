import ExpenseChart from "@/components/Finance/ExpenseChart";
import FeeBreakdown from "@/components/Finance/FeeBreakdown";
import GainChart from "@/components/Finance/GainChart";
import OutstandingFeesTotal from "@/components/Finance/OutstandingFeesTotal";
import OutstandingPerClass from "@/components/Finance/OutstandingPerClass";
import Profit from "@/components/Finance/Profit";
import TotalCollectionFromFees from "@/components/Finance/TotalCollectionFromFees";
import TotalOutstandingSalary from "@/components/Finance/TotalOutstandingSalary";
import TotalSalaryPaid from "@/components/Finance/TotalSalaryPaid";
import Divider from "@mui/material/Divider";

const page = async () => {
  return (
    <div className="w-full flex justify-between flex-col xl:flex-row">
      {/*70 % column */}
      <div className="w-full xl:w-[65%] flex-col flex gap-5 ">
      <h1 className="font-bold text-xl">Finance</h1>
        <Divider />
        <OutstandingFeesTotal />
        <Divider />
        <TotalCollectionFromFees />
        <Divider />
        <OutstandingPerClass />
        <Divider />
        <div className="w-full flex justify-between items-center flex-col xl:flex-row">
          <ExpenseChart />
          <Divider orientation="vertical"/>
          <GainChart />
        </div>
      </div>
      <div className="w-full xl:w-[30%]  flex  flex-col gap-5">
        <FeeBreakdown />
        <Divider />
        <TotalSalaryPaid />
        <Divider />
        <TotalOutstandingSalary />
        <Divider />
        <Profit />
      </div>
    </div>
  );
};
export default page;
