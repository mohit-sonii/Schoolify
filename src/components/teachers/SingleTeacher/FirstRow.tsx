import Image from "next/image";
import React from "react";

const FirstRow = ({
  id,
  name,
  qualification,
  gender,
  contact,
  address,
  arrival,
  servingInPresent,
  lastServe,
}: {
  id: number;
  name: string;
  qualification: string;
  gender: string;
  contact: string;
  address: string;
  arrival: string;
  servingInPresent?: "Yes" | "No";
  lastServe?: string;
}) => {
  return (
    <div className="flex gap-3 flex-col lg:flex-row w-full justify-between">
      <div className="w-max h-max flex flex-col gap-3 items-center justify-center ">
        <Image
          src="/student.svg"
          width={100}
          height={100}
          alt="Student Image"
        />
        <h3 className="font-semibold flex items-center  text-gray-700 justify-center gap-2">
          Joinne ID
          <span className="font-medium text-gray-500">{id}</span>
        </h3>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-max  h-max flex  flex-col justify-between gap-3">
          <h1 className="text-sm font-semibold text-gray-900">
            Basic Information
          </h1>
          <div className="flex flex-col gap-2 text-xs font-light">
            <h3 className="font-medium text-gray-700">
              Full Name :{" "}
              <span className="font-normal text-gray-500">{`${name}`}</span>
            </h3>
            <h3 className="font-medium text-gray-700">
              Gender :{" "}
              <span className="font-normal text-gray-500">{`${gender}`}</span>
            </h3>
          </div>
        </div>
        <div className="w-max  h-max flex  flex-col justify-between gap-3">
          <h1 className="text-sm font-semibold text-gray-900">
            Contact Information
          </h1>
          <div className="flex flex-col gap-2 text-xs font-light">
            <h3 className="font-medium text-gray-700">
              Contact Number :{" "}
              <span className="font-normal text-gray-500">{`${contact}`}</span>
            </h3>
            <h3 className="font-medium text-gray-700">
              Address :{" "}
              <span className="font-normal text-gray-500">{`${address}`}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="w-max  h-max flex  flex-col justify-between gap-3">
        <h1 className="text-sm font-semibold text-gray-900">
          Professional Information
        </h1>
        <div className="flex flex-col gap-2 text-xs font-light">
          <h3 className="font-medium text-gray-700">
            Qualifications :{" "}
            <span className="font-normal text-gray-500">{`${qualification}`}</span>
          </h3>
          <h3 className="font-medium text-gray-700">
            Date of Arrival :{" "}
            <span className="font-normal text-gray-500">{`${arrival}`}</span>
          </h3>
          <h3 className="font-medium text-gray-700">
            Serving At present :{" "}
            <span className="font-normal text-gray-500">{`${servingInPresent}`}</span>
          </h3>
          {servingInPresent === "No" && (
            <h3 className="font-medium text-gray-700">
              Last Serve :{" "}
              <span className="font-normal text-gray-500">{`${arrival}`}</span>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstRow;
