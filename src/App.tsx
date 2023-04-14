import React, {useState} from 'react';
import DatePicker from './ownsolution/DatePicker';
import AntDatePicker from "./ant/AntDatePicker";
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
                <DatePicker value={selectedDate} onChange={handleDateChange}/>
                <p>Selected date: {selectedDate || 'Select a date'}</p>

                <h1>Ant Design Date Picker</h1>
                <AntDatePicker value={selectedDate} onChange={handleDateChange}/>
                <p>Selected date: {selectedDate || 'Select a date'}</p>
            </header>
        </div>
    );
};

export default App;
