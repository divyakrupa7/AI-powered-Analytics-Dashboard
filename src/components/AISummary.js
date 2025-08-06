export default function AISummary() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-full hover:shadow-lg transition-transform duration-300 hover:scale-105">
      <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-white">🧠 AI-Powered Insights</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
        <li>
          <span className="font-medium">Q2 Sales ↑:</span> Growth of 28% over Q1, led by strong performance in June.
        </li>
        <li>
          <span className="font-medium">Conversion Boost:</span> Marketing campaigns in March increased engagement rates by 15%.
        </li>
        <li>
          <span className="font-medium">AI Forecast:</span> Q3 expected to perform best in southern regions due to seasonal trends.
        </li>
        <li>
          <span className="font-medium">Suggested Action:</span> Allocate more budget to targeted ads and optimize low-performing segments.
        </li>
      </ul>
    </div>
  );
};
