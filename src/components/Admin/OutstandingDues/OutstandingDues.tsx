"use client"

import { LineChart } from "@mui/x-charts"
import { useRef, useState, useEffect } from 'react'

export default function OutstandingDues({ classes, students }: { classes: number[], students: number[] }) {

  const widthRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(500);

  useEffect(() => {
    function handleResize() {
      if (widthRef.current)
        setWidth(widthRef.current.offsetWidth)
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
              data: classes,
              scaleType: "point",
              label: 'Classes'
            },
          ]
        }
        series={[
          {
            data: students,
            area: true,
            label:' Number of Students'
          },
        ]}
        width={width}
        height={400}
      />
    </div>
  )
}
