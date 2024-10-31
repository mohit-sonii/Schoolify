"use client"

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useRef, useState, useEffect } from 'react'

export default function AdmissionChart() {

  const widthRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(500);

  React.useEffect(() => {
    function handleResize() {
      if (widthRef.current) {
        setWidth(widthRef.current.offsetWidth)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div ref={widthRef} className="w-full">

      <LineChart
        xAxis={
          [
            {
              data: [1, 2, 3, 5, 8, 10],
              scaleType: "point",
              tickSize:10
            }
          ]
        }
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5]
          },
        ]}
        width={width}
        height={400}
      />
    </div>
  );
}
