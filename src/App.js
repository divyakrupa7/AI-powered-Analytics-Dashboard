import LineChart from './components/LineChart';
import AISummary from './components/AISummary';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-6 space-y-6 transition-colors duration-500">
        
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="default"
            />
          }
          label={darkMode ? 'Dark Mode' : 'Light Mode'}
          className="text-gray-800 dark:text-white"
        />

        <h1 className="text-3xl font-bold text-blue-600 text-center"> 📊 Analytics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <LineChart />
          <AISummary />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BarChart />
          <PieChart />
        </div>
      </div>


    <footer className="text-center text-sm text-gray-600  mt-10">
      Built by Divya · Powered by AI 🚀
    </footer>
    </div>


  );
}

export default App;
