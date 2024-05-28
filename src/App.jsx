import React from 'react';
import data from './data/data.json';
import SummaryCard from './components/SummaryCard';
import './App.css';

function App() {

  return (
    <main>
      <SummaryCard summaryData={data} />
    </main>
  )
}

export default App
