"use client"

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function GenderChart({ boys, girls }: { boys: number, girls: number }) {
  const gender = [
    {
      label: 'Boys',
      value: parseFloat((boys / (boys + girls) * 100).toPrecision(4)),
    },
    {
      label: 'Girls',
      value: parseFloat((girls / (boys + girls) * 100).toPrecision(4))
    }
  ]
  return (
    <PieChart
      series={[
        {
          data: gender,
          innerRadius: 30,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
      colors={['#CFCEFF', '#CBC3E3']}
    />
  );
}