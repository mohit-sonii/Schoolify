"use client"

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useRef, useState, useEffect } from 'react'

export default function TotalStudents({
  range
}: {
  range:
  {
    count: number, className: number
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

  const classes = range.map((val) => (val.className))
  const counting = range.map((val) => (val.count))

  return (

    <div ref={widthRef} className="w-full">
      <LineChart
        xAxis={
          [
            {
              data: classes,
              scaleType: "point",
              label: "Classes"
            }
          ]
        }
        series={[
          {
            data: counting,
            label: "Total Number of Students"
          },
        ]}
        width={width}
        height={400}
      />
    </div>
  );
}
