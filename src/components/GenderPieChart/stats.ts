
export const gender = [
  {
    label: 'Male',
    value: 72,
  },
  {
    label: 'Female',
    value: 85,
  },
  
];

export const genderDistribution = [
  ...gender.map((v) => ({
    ...v,
    label: v.label === 'Other' ? 'Others' : v.label,
  })),
];

export const valueFormatter = (item: { value: number }) => `${item.value}%`;
