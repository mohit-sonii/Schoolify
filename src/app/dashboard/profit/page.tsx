import IncomeTable from "@/components/Profit/IncomeTable";
import Income from "@/components/Profit/Income";
import Expense from "@/components/Profit/Expense";
import Profit from "@/components/Profit/Profit";
import ProfitAnuallyChart from "@/components/Profit/ProfitAnuallyChart";
import { Divider } from "@mui/material";

const page = async () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Profit</h1>
      <Divider />
      <div className="grid xl:grid-cols-3 gap-4">
        <Income />
        <Expense />
        <Profit />
      </div>
      <Divider />
      <ProfitAnuallyChart />
      <Divider />
      <IncomeTable />
    </div>
  );
};

export default page;
