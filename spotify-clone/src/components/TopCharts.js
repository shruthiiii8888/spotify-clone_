import React, { useState, useEffect } from 'react';
import { getTopCharts } from '../api';

const TopCharts = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    const fetchCharts = async () => {
      const data = await getTopCharts();
      setCharts(data);
    };

    fetchCharts();
  }, []);

  return (
    <div>
      <h2>Top Charts</h2>
      <ul>
        {charts.map(chart => (
          <li key={chart.id}>{chart.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopCharts;
