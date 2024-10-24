"use client"

import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

type Gender = {
  boys: number,
  girls: number
}

const GenderChart = ({ boys, girls }: Gender) => {
  const data = [
    {
      name: 'Total',
      count: boys + girls,
      fill: '#8884d8',
    },
    {
      name: 'Girls',
      count: girls,
      fill: '#83a6ed',
    },
    {
      name: 'Boys',
      count: boys,
      fill: '#828282'
    }
  ];
  return (
    <div className="w-full relative h-full bg-red-400">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>

  )
}

export default GenderChart