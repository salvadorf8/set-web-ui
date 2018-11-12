import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';


import "react-datepicker/dist/react-datepicker.css";
import { sendEmail } from '../../actions';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    renderCheckboxField(field) {
        return (
            <div className="custom-control custom-checkbox text-muted">
                <input name={field.name} id={field.id} type="checkbox" className="custom-control-input" {...field.input} />
                <label htmlFor={field.htmlFor} className="custom-control-label" >{field.label}</label>
            </div>
        );
    }

    onSubmit(values) {
        this.props.sendEmail(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <section className="bg-dark pt-1" id="contactform">
                <form name="contact" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="container">
                        <div className="form-row">
                            {this.props.email.msg}
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <Field name="firstName" component="input" type="text" placeholder="First Name" className="form-control bg-dark" />
                            </div>
                            <div className="form-group col-md-6">
                                <Field name="lastName" component="input" type="text" placeholder="Last Name" className="form-control bg-dark" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <Field name="email" component="input" type="text" placeholder="Email" className="form-control bg-dark" />
                            </div>

                            <div className="form-group col-md-6">
                                <Field name="phone" component="input" type="text" placeholder="Phone" className="form-control bg-dark" />
                            </div>
                        </div>
                        <h5 className="section-heading text-white mt-4 text-center">Projected Start Date and Property Details</h5>
                        <hr className="mt-1" />
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <DatePicker className="custom-select bg-dark" selected={this.state.startDate} onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <Field name="buildingTypes" component="select" className="custom-select bg-dark">
                                    <option value="">Building Type...</option>
                                    <option value="MultiFamily">MultiFamily</option>
                                    <option value="SingleHome">SingleHome</option>
                                    <option value="Commercial">Commercial</option>
                                </Field>
                            </div>
                            <div className="form-group col-md-3">
                                <Field name="numberOfUnits" component="select" className="custom-select bg-dark">
                                    <option value="" >Number of Units...</option>
                                    <option value="1">1 - 100</option>
                                    <option value="2">101 - 200</option>
                                    <option value="3">201 or More...</option>
                                </Field>
                            </div>
                            <div className="form-group col-md-3">
                                <Field name="numberOfFloors" component="select" className="custom-select bg-dark">
                                    <option value="" >Number of Floors...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3 or More...</option>
                                </Field>
                            </div>
                            <div className="form-group col-md-3">
                                <Field name="sitePhasing" component="select" className="custom-select bg-dark">
                                    <option value="" >Site-Building Phasing...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="3">4 or More...</option>
                                </Field>
                            </div>
                            <div className="form-group col-md-3">
                                <Field name="numberOfIdfs" component="select" className="custom-select bg-dark">
                                    <option value="" >Number of IDF's...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="3">4 or More...</option>
                                </Field>
                            </div>
                        </div>
                        <div className="form-row mt-2">
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">Low Voltage Cabling</h5>
                                <hr className="mt-1" />
                                <Field name="c0" id="c0" htmlFor="c0" label="CAT5/6... cable" component={this.renderCheckboxField} />
                                <Field name="c1" id="c1" htmlFor="c1" label="RG-11 homeruns" component={this.renderCheckboxField} />
                                <Field name="c2" id="c2" htmlFor="c2" label="voice lines" component={this.renderCheckboxField} />
                                <Field name="c3" id="c3" htmlFor="c3" label="3 sleeves" component={this.renderCheckboxField} />
                                <Field name="c4" id="c4" htmlFor="c4" label="1.25 smoothwall innerduct" component={this.renderCheckboxField} />
                                <Field name="c5" id="c5" htmlFor="c5" label="PVC 4 pipes" component={this.renderCheckboxField} />
                            </div>
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">Access Control</h5>
                                <hr className="mt-1" />
                                <Field name="c8" id="c8" htmlFor="c8" label="Magnetic locks" component={this.renderCheckboxField} />
                                <Field name="c9" id="c9" htmlFor="c9" label="Electric Strikes" component={this.renderCheckboxField} />
                                <Field name="c10" id="c10" htmlFor="c10" label="Request to Exit" component={this.renderCheckboxField} />
                                <Field name="c11" id="c11" htmlFor="c11" label="Proximity readers" component={this.renderCheckboxField} />
                                <Field name="c12" id="c12" htmlFor="c12" label="panic bars" component={this.renderCheckboxField} />
                            </div>
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">CCTV</h5>
                                <hr className="mt-1" />
                                <Field name="c13" id="c13" htmlFor="c13" label="indoor Dome Cameras" component={this.renderCheckboxField} />
                                <Field name="c14" id="c14" htmlFor="c14" label="Outdoor Dome Cameras" component={this.renderCheckboxField} />
                                <Field name="c15" id="c15" htmlFor="c15" label="License Plate Cameras" component={this.renderCheckboxField} />
                                <Field name="c16" id="c16" htmlFor="c16" label="Elevator Cameras" component={this.renderCheckboxField} />
                                <Field name="c17" id="c17" htmlFor="c17" label="Garage panic box" component={this.renderCheckboxField} />
                                <Field name="c18" id="c18" htmlFor="c18" label="Conduit" component={this.renderCheckboxField} />
                            </div>
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">Trim Out</h5>
                                <hr className="mt-1" />
                                <Field name="c6" id="c6" htmlFor="c6" label="phone outlets" component={this.renderCheckboxField} />
                                <Field name="c7" id="c7" htmlFor="c7" label="comms enclosure" component={this.renderCheckboxField} />
                            </div>
                        </div>
                        <div className="form-row mt-2">
                            <div className="form-group col-md-12">
                                <Field name="description" id="description" component="textarea" type="text" placeholder="Additional Description" className="form-control bg-dark" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm btn-block">Submit</button>
                        <Link className="btn btn-primary btn-sm btn-block" to="/" >Cancel</Link>
                    </div>
                </form>
            </section>
        );
    }
}


function mapStateToProps(state) {
    return { email: state.email };
}


export default reduxForm({
    form: 'NewContactForm'
})(
    connect(mapStateToProps, { sendEmail })(ContactForm)
);