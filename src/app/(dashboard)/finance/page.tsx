import OutstandingFeesTotal from "@/components/Finance/OutstandingFeesTotal";
import OutstandingPerClass from "@/components/Finance/OutstandingPerClass";
import TotalCollectionFromFees from "@/components/Finance/TotalCollectionFromFees";
import Divider from '@mui/material/Divider';

const page = () => {

  return (
    <>
      {/*70 % column */}
      <div className="w-full xl:w-[60%] flex-col flex gap-5">
        <OutstandingFeesTotal />
        <Divider/>
        <TotalCollectionFromFees/>
        <Divider />
        <OutstandingPerClass />
        <Divider />
      </div>
    </>
  );
};
export default page;
