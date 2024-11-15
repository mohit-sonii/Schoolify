"use server"


const FeeDetail = ({
  amount,
  last_paid_for,
  pending_months,
  total_pending_amount,
}: {
  amount: number;
  last_paid_for: string;
  pending_months: string[];
  total_pending_amount: number;
}) => {
  return (
    <div className=" rounded-lg p-4 w-full bg-orange-200 text-xs flex flex-col items-center justify-center h-max gap-3">
      <h1 className="text-sm font-semibold text-gray-900 ">Fee Details</h1>
      <div className="flex flex-col gap-2 text-xs font-light  w-full ">
        <h3 className="font-semibold text-gray-700">
          Monthly Amount :{" "}
          <span className="font-normal text-gray-500">{`${amount}`}</span>
        </h3>
        <h3 className="font-semibold text-gray-700">
          Last Paid for :{" "}
          <span className="font-normal text-gray-500">{`${last_paid_for}`}</span>
        </h3>
        <h3 className="font-semibold text-gray-700 h-max flex flex-wrap items-center gap-2">
          Pending Months :{" "}
          {pending_months.map((val) => (
            <span
              key={val}
              className="text-gray-600 font-light text-xs rounded-sm shadow-sm px-4 py-1  bg-white w-max flex gap-2 "
            >
              {val}
            </span>
          ))}
        </h3>
        <h3 className="font-semibold text-gray-700">
          Total Pending Amount :{" "}
          <span className="font-normal text-gray-500">{`${total_pending_amount}`}</span>
        </h3>
      </div>
    </div>
  );
};
export default FeeDetail;
