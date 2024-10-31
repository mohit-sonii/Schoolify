"use client"

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function AttendanceChart({ present, total }: { present: number, total: number }) {
  const attendance = [
    {
      label: 'Present',
      value: present,
    },
    {
      label: 'Absent',
      value: total-present
    }
  ]
  return (
    <PieChart
      series={[
        {
          data: attendance,
          innerRadius: 30,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      slotProps={{
        legend: {
          direction: 'column',
          position: { vertical: 'middle', horizontal: 'right' },
          padding: 0,
        },
      }}
      height={200}
      colors={['#CFCEFF', '#CBC3E3']}
    />
  );
}