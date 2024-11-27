import Image from "next/image";
import { MouseEvent } from "react";

const Button = ({
  innerText,
  click,
}: {
  innerText: string;
  click: (event:MouseEvent<HTMLButtonElement>)=>void;
}) => {
  return (
    <button
      className="px-4 h-max py-2 border-none shadow-lg outline-none text-xs font-medium text-gray-700 rounded-lg bg-white transition-all ease-in-out hover:text-black flex gap-2 flex-row items-center justify-center w-max"
      onClick={click}
    >
      <Image src="/create.svg" alt="" width={15} height={15} />
      <span>{innerText}</span>
    </button>
  );
};
export default Button;
