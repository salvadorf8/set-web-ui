import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = ({ input, label, defaultValue, meta :{ error, touched}}) => {
    // const className = `field ${error && touched ? 'error' : ''}`;

    return (
        <div>
            <label className="text-secondary">{label}</label>
            <div>
                <DatePicker className="form-control bg-dark text-light" autoComplete="off" dateForm="MM/DD/YYYY" selected={input.value ? new Date(input.value) : defaultValue} {...input} />
            </div>
            {/* {touched && error && <span>{error}</span>} */}
        </div>
    );
}

export default ReactDatePicker