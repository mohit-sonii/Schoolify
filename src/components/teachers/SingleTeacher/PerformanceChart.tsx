"use client"

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useState, useRef, useEffect } from 'react'

export default function PerformanceChart() {
  const widthRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(500)

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

  return (
    <div className="w-full  flex gap-5 flex-col" ref={widthRef}>
      <h1 className="w-full font-semibold text-xs">Teacher Performance</h1>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={width}
        height={300}
      />
    </div>
  );
}
