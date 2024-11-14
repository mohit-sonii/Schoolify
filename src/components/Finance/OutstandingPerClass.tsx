import React from "react";
import { findTotalOutstanding } from "./Functions";
import OutstandingDues from "../Admin/OutstandingDues/OutstandingDues";


const OutstandingPerClass = async () => {
  // this is per class total outstanding record to be shown in graph
  const result = await findTotalOutstanding();
  const keys = Object.keys(result);
  const values = Object.values(result);

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
          Outstanding Amount
          <span className="text-[10px] font-light text-gray-500">
            Per Class
          </span>
        </h3>
      </div>
      {keys.length > 0 ?
        <OutstandingDues
          x={keys}
          y={values}
          labelForY="Total outstanding amount"
          Area={false}
          
        />
        : <p>No more outstanding fees</p>}
    </>
  );
};

export default OutstandingPerClass;
