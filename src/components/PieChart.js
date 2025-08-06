import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Sales Distribution',
        data: [300, 150, 100],
        backgroundColor: ['#3B82F6', '#10B981', '#F59E0B'],
        borderColor: ['#fff', '#fff', '#fff'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-full hover:shadow-lg transition duration-300">
        <div className="h-[300px]">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white text-center">📈 Sales Distribution</h2>
            <Pie data={data} />
        </div>
    </div>
  );
};

export default PieChart;
