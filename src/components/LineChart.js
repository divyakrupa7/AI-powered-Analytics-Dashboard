import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { saveAs } from 'file-saver';
import Papa from 'papaparse';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartDataByQuarter = {
  Q1: [150, 195, 165],
  Q2: [240, 210, 250],
  Q3: [260, 230, 275],
  Q4: [200, 180, 220],

};
const labelByQuarter = {
      Q1: ['Jan', 'Feb', 'Mar'],
      Q2: ['Apr', 'May', 'Jun'],  
      Q3: ['Jul', 'Aug', 'Sep'],
      Q4: ['Oct', 'Nov', 'Dec'],  
};

const LineChart = () => {
  const [quarter, setQuarter] = useState('Q1');
  const [data, setData] = useState(() => generateChartData('Q1'));

  function generateChartData(q) {
    return {
        labels: labelByQuarter[q],
        datasets: [
            {
            label: `Sales (${q})`,
            data: chartDataByQuarter[q],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.3,
            },
        ],
    };
  }
  useEffect(() => {
    setData(generateChartData(quarter));
  }, [quarter]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = chartDataByQuarter[quarter].map(
        (val) => val + Math.floor(Math.random() * 20 - 10)
      );
      setData({
        labels: labelByQuarter[quarter],
        datasets: [
          {
            label: `Sales (${quarter})`,
            data: newData,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.3,
          },
        ],
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [quarter]);

const exportToCSV = () => {
    const csvData = chartDataByQuarter[quarter].map((value, index) => ({
      Month: labelByQuarter[quarter][index],
      Sales: value,
    }));
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `Sales_${quarter}.csv`);
  };
const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        title: {
            display: true,
            text: 'Sales Over Time',
        },
    },
};
return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-full hover:shadow-lg hover:scale-105 transition-transform duration-300">
        {/* 🔽 Dropdown to select quarter */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">📈Sales Over Time</h2>
            <select
            value={quarter}
            onChange={(e) => setQuarter(e.target.value)}
            className="border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
            >
                <option value="Q1">Q1</option>
                <option value="Q2">Q2</option>
            </select>
            <Button
                onClick={exportToCSV}
                variant="contained"
                color="primary"
                className="ml-4"
            >
                Export CSV
            </Button>


        </div>

        {/* 📊 Line Chart */}
        <Line data={data} options={options} />
    </div>
    );
};
export default LineChart;
