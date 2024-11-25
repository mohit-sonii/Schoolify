import React from "react";
import { classes } from "./Extra";

const InputField = ({
  label,
  type,
  classnames,
  name,
  defaultValue,
  register,
}: {
  label: string;
  type: string;
  defaultValue: string | number;
  name: string;
  register: any;
  classnames?: string;
}) => {
  return (
    <div className={`${classnames} flex flex-col gap-2`}>
      <label
        htmlFor="input-field"
        className="text-xs  text-gray-600 font-semibold"
      >
        {label}
      </label>
      <input
        {...register(name)}
        id="input-field"
        type={type}
        defaultValue={defaultValue}
        placeholder={name==="dob" ? "DD/MM/YYYY" :` Enter ${label}`}
        className="px-4 py-2 rounded-md shadow-md border border-gray-300 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400  bg-white appearance-none"
      />
    </div>
  );
};

export default InputField;

export const SelectField = ({
  values,
  label,
  name,
  register,
}: {
  values?: string[] | number[];
  label: string;
  name: string;
  register: any;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`${label}`} className="text-xs font-medium text-gray-600">
        {label}
      </label>
      {label === "Gender" ? (
        <select
          className={`font-light text-xs rounded-md shadow-md px-4 py-2 border-none outline-none cursor-pointer ${label}`}
          {...register(name)}
        >
          <option value="Male" className="text-xs font-light text-gray-500">
            Male
          </option>
          <option value="Female" className="text-xs font-light text-gray-500">
            Female
          </option>
        </select>
      ) : label == "Class" ?
          <select
            className={`font-light text-xs rounded-md shadow-md px-4 py-2 border-none outline-none cursor-pointer ${label}`}
            {...register(name)}
          >
            {classes?.map((val) => (
              <option
                key={val}
                value={`${val}`}
                className="text-xs font-light text-gray-500"
              >
                {val.replace("class_","").concat("th")}
              </option>
            ))}
          </select>
        :
          (
        <select
          className={`font-light text-xs rounded-md shadow-md px-4 py-2 border-none outline-none cursor-pointer ${label}`}
          {...register(name)}
        >
          {values?.map((val) => (
            <option
              key={val}
              value={`${val}`}
              className="text-xs font-light text-gray-500"
            >
              {val}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
