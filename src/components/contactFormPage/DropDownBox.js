import React from 'react';
import { Field } from 'redux-form';

const DropDownBox = (input) => {

    const RenderOptions = () => {
        return (
            input.values.map((value) => {
                return (
                    <option value={value} key={value}>{value}</option>
                )
            })
        )
    }

    return (
        <div className="form-group col-md-3">
            <label className="text-secondary">{input.label}</label>
            <Field name={input.name} component="select" className={input.className}>
                <RenderOptions />
            </Field>
        </div>
    );

};

export default DropDownBox;