import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Typography } from "@mui/material";

const AccordionElement = ({
  fees,
  classname,
}: {
  fees: number;
  classname: string;
}) => {
  const maintanence = (fees * 12) / 100;
  const sports = (fees * 10) / 100;
  const transport = (fees * 16) / 100;
  const tution = (fees * 62) / 100;
  return (
    <Accordion className="mb-2">
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
      >
        <Typography>{classname}</Typography>
      </AccordionSummary>
      <AccordionDetails className="flex w-full flex-col gap-3">
        <span className="font-bold w-full justify-between text-xs flex ">
          Tution Fees
          <span className=" justify-end">{tution}</span>
        </span>
        <span className="font-bold w-full justify-between text-xs flex ">
          Maintanence
          <span className=" justify-end">{maintanence}</span>
        </span>
        <span className="font-bold w-full justify-between text-xs flex ">
          Sports and Entertainment
          <span className=" justify-end">{sports}</span>
        </span>
        <span className="font-bold w-full justify-between text-xs flex ">
          Transport
          <span className=" justify-end">{transport}</span>
        </span>
        <span className="font-bold w-full justify-between text-xs flex ">
          Total Fees
          <span className=" justify-end">
            {fees}
          </span>
        </span>
      </AccordionDetails>
    </Accordion>
  );
};
export default AccordionElement;
