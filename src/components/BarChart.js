// src/components/BarChart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Revenue (in $1000s)',
      data: [25, 40, 35, 60],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderRadius: 6,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
  },
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function BarChart() {
    return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-full hover:shadow-lg transition duration-300">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">📈 Revenue Per Quarter</h2>
            <Bar data={data} options={options} />
    </div>);
}

export default BarChart;
