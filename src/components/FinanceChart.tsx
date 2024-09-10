"use client"

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name:"Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name:"Feb",
    income: 4200,
    expense: 1400,
  },
  {
    name:"Mar",
    income: 3250,
    expense: 2500,
  },
  {
    name:"Apr",
    income: 3100,
    expense: 2750,
  },
  {
    name:"May",
    income: 2700,
    expense: 2600,
  },
  {
    name:"Jun",
    income: 2500,
    expense: 2380,
  },
  {
    name:"Jul",
    income: 2800,
    expense: 2940,
  },
  {
    name:"Aug",
    income: 3900,
    expense: 2333,
  },
  {
    name:"Sep",
    income: 4300,
    expense: 2404,
  },
  {
    name:"Oct",
    income: 4200,
    expense: 2506,
  },
  {
    name:"Nov",
    income: 3000,
    expense: 3401,
  },
  {
    name:"Dec",
    income: 3500,
    expense: 3333,
  },
  
];


const FinanceChart=()=>{
  return (
  <div className="bg-white rounded-xl w-full p-4 h-full">
  <div className="flex justify-between items-center">
    <h1 className="text-lg font-semibold">Finance</h1>
    <Image src="/moredark.png" alt="" height={20} width={20}/>
  </div>
  <ResponsiveContainer width="90%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop:"10px",paddingBottom:"30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
  </div>
  );
};

export default FinanceChart;