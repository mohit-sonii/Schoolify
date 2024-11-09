"use client"

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useRef, useState, useEffect } from 'react'

export default function AdmissionChart({
  range
}: {
  range:
  {
    admissionYear: number, count: number
  }[]
}
) {

  const widthRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(500);

  useEffect(() => {
    function handleResize() {
      if (widthRef.current) {
        setWidth(widthRef.current.offsetWidth)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const years = range.map((val) => (val.admissionYear))
  const yearData = range.map((val) => (val.count))

  return (

    <div ref={widthRef} className="w-full">
      <LineChart
        xAxis={
          [
            {
              data: years,
              scaleType: "point",
              label: "Year Range"
            }
          ]
        }
        series={[
          {
            data: yearData,
            label: "Total Number of Admissions"
          },
        ]}
        width={width}
        height={400}
      />
    </div>
  );
}
