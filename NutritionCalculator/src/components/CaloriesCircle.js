import React from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';



const COLORS = ['#f19d1d', '#27d62c', '#1ba3cb'];

const CaloriesCircle = props =>{
    const {
        data
    } = props;
    return (
        <PieChart width={400} height={200}>
            <Pie
            dataKey='value'
            data={data} 
            cx={200} 
            cy={100} 
            labelLine={false}
            label={false}
            innerRadius={40}
            outerRadius={80}
            paddingAngle={2}
            fill="#8884d8"
            >
                {
                data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
            }
            </Pie>
        </PieChart>
    );
  }

export default CaloriesCircle