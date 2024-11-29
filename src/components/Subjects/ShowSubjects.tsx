"use server";
import { FetchClassSubjects } from "./FetchClassSubjects";
import Cards from "./Cards";

export const ShowSubjects = async () => {
  const result: { classname: string; subjectList: string[] }[] =
    await FetchClassSubjects();
  return (
    <div className="flex w-full gap-5 items-center flex-col mb-9">
      {result.map((val) => (
        <div className="flex flex-col w-full gap-4 odd:bg-gray-500 even:bg-gray-800 rounded-md">
          <Cards
            key={val.classname}
            classname={val.classname.replace("_", " ")}
            subjectList={val.subjectList}
          />
        </div>
      ))}
    </div>
  );
};
