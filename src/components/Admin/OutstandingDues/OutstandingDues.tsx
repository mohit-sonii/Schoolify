"use client";

import { LineChart } from "@mui/x-charts";
import { useRef, useState, useEffect } from "react";

export default function OutstandingDues({
  x,
  y,
  labelForY,
  Area
}: {
  x: string[];
  y: number[];
    labelForY: string;
  Area:boolean
}) {
  const widthRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(500);

  useEffect(() => {
    function handleResize() {
      if (widthRef.current) setWidth(widthRef.current.offsetWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={widthRef} className="w-full">
      <LineChart
        xAxis={[
          {
            data: x,
            scaleType: "point",
            label: "Classes",
          },
        ]}
        series={[
          {
            data: y,
            area: Area,
            color:'#8A89CC',
            label: labelForY,
          },
        ]}
        width={width}
        height={400}
      />
    </div>
  );
}
