import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { sendEmail } from '../../actions';


class ContactForm extends Component {


    renderCheckboxField(field) {
        return (
            <div className="custom-control custom-checkbox">
                <input name={field.name} type="checkbox" className="custom-control-input" {...field.input} />
                <label htmlFor={field.name} className="custom-control-label">{field.label}</label>
            </div>
        );
    }


    onSubmit(values) {
        this.props.sendEmail(values);
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <form name="contact" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="container mt-5">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Field name="firstName" component="input" type="text" placeholder="First Name" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                            <Field name="lastName" component="input" type="text" placeholder="Last Name" className="form-control" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <Field name="email" component="input" type="text" placeholder="Email" className="form-control" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <Field name="phone" component="input" type="text" placeholder="Phone" className="form-control" />
                        </div>

                        <div className="form-group col-md-3">
                            <Field name="buildingTypes" component="select" className="custom-select">
                                <option value="">Building Type...</option>
                                <option value="MultiFamily">MultiFamily</option>
                                <option value="SingleHome">SingleHome</option>
                                <option value="Commercial">Commercial</option>
                            </Field>
                        </div>

                        <div className="form-group col-md-3">
                            <Field name="numberOfUnits" component="select" className="custom-select">
                                <option value="" >Number of Units...</option>
                                <option value="1">1 - 100</option>
                                <option value="2">101 - 200</option>
                                <option value="3">201 or More...</option>
                            </Field>
                        </div>
                        <div className="form-group col-md-3">
                            <Field name="numberOfFloors" component="select" className="custom-select">
                                <option value="" >Number of Floors...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3 or More...</option>
                            </Field>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                        {/* <Field name="service1" label="service" component={this.renderCheckboxField} />
                            <Field name="service2" label="service" component={this.renderCheckboxField} />
                            <Field name="service3" label="service" component={this.renderCheckboxField} />
                            <Field name="service4" label="service" component={this.renderCheckboxField} /> */}
                            <div className="custom-control custom-checkbox">
                                <Field name="c1" id="c1" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c1" className="custom-control-label">service</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <Field name="c2" id="c2" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c2" className="custom-control-label">service</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <Field name="c3" id="c3" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c3" className="custom-control-label">service</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <Field name="c4" id="c4" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c4" className="custom-control-label">service</label>
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <div className="custom-control custom-checkbox">
                                <Field name="c5" id="c5" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c5" className="custom-control-label">service</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <Field name="c6" id="c6" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c6" className="custom-control-label">service</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <Field name="c7" id="c7" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c7" className="custom-control-label">service</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <Field name="c8" id="c8" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c8" className="custom-control-label">service</label>
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <div className="custom-control custom-checkbox">
                                <Field name="c9" id="c9" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c9" className="custom-control-label">service</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <Field name="c10" id="c10" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c10" className="custom-control-label">service</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <Field name="c11" id="c11" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c11" className="custom-control-label">service</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <Field name="c12" id="c12" component="input" type="checkbox" className="custom-control-input" />
                                <label htmlFor="c12" className="custom-control-label">service</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <Field name="tarea" id="tarea" component="textarea" type="text" placeholder="Other" className="form-control" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-sm btn-block">Submit</button>
                    <Link className="btn btn-primary btn-sm btn-block" to="/" >Cancel</Link>
                </div>
            </form>
        );
    }
}


export default reduxForm({
    form: 'NewContactForm'
})(
    connect(null, { sendEmail })(ContactForm)
);