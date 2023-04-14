import React, {FC} from 'react';
import {DatePicker as AntDatePicker} from 'antd';
import {Dayjs} from 'dayjs';
import dayjs from 'dayjs';

interface AntDatePickerProps {
    value: string;
    onChange: (value: string) => void;
}

const DatePicker: FC<AntDatePickerProps> = ({value, onChange}) => {
    const handleChange = (date: Dayjs | null) => {
        if (date) {
            onChange(date.format('YYYY-MM-DD'));
        } else {
            onChange('');
        }
    };

    return (
        <AntDatePicker
            format="YYYY-MM-DD"
            value={value ? dayjs(value, 'YYYY-MM-DD') : null}
            onChange={handleChange}
        />
    );
};

export default DatePicker;
