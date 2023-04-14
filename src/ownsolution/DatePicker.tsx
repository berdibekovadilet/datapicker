import React, { ChangeEvent, FC } from 'react';
import styles from './DatePicker.module.css';

interface DatePickerProps {
    value: string;
    onChange: (value: string) => void;
}

const DatePicker: FC<DatePickerProps> = ({ value, onChange }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <input
            type="date"
            value={value}
            onChange={handleChange}
            className={styles.datePickerInput}
        />
    );
};

export default DatePicker;
