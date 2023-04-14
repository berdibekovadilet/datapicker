import React, { useState } from 'react';
import DatePicker from './ownsolution/DatePicker';
import './App.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (value: string) => {
    setSelectedDate(value);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Date Picker</h1>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
          <p>Selected date: {selectedDate || 'None'}</p>
        </header>
      </div>
  );
};

export default App;
