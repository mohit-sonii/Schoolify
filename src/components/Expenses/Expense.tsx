"use client"
import React from 'react'
import ExpenseTable from './ExpenseTable'
import { expenseType, getAllData } from './Functions'
import useModalStore from '@/utils/store'
import {useEffect,useState} from 'react'

const Expense = () => {
  const currState = useModalStore((state) => state.expenseRenderState);
  const [dataState, setData] = useState<expenseType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result: expenseType[] = await getAllData()
      setData(result);
    }
    fetch();

  },[currState])
  return (
    <div className="flex flex-col gap-5 relative">
    <ExpenseTable expenditure={dataState}/>
    </div>
  )
}

export default Expense