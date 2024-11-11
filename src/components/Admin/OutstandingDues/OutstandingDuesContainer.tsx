import OutstandingDues from "./OutstandingDues";
import { outstandingData } from "./OutStandingAmount";

const OutstandingDuesContainer = async () => {
  const res = await outstandingData();

  return (
    <div className="w-full flex flex-wrap gap-2">
      <div className="flex flex-col justify-center w-full gap-3 ">
        <h1 className="font-semibold text-gray-600 ">Outstanding Dues Count</h1>
        <span className="text-xs font-light">Class-wise Analysis</span>
      </div>
      <OutstandingDues
        x={res.classId}
        y={res.totalStudent}
        labelForY="Number of students"
        Area={true}
      />
    </div>
  );
};

export default OutstandingDuesContainer;
