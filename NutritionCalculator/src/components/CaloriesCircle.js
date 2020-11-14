import React from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';

const COLORS = ['#ff652f', '#22ba26', '#1a98bd'];

const CaloriesCircle = props =>{
    const {
        data
    } = props;

    return (
        <PieChart width={200} height={200}>
            <Pie
            dataKey='value'
            data={data} 
            cx={100} 
            cy={100} 
            labelLine={false}
            label={false}
            innerRadius={40}
            outerRadius={80}
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