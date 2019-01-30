import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
// import moment, { calendarFormat } from 'moment';
import "react-datepicker/dist/react-datepicker.css";

import EmailSubmitMessage from './commonComponents/EmailSubmitMessage';
import CheckBoxField from './commonComponents/CheckBoxField';
import { sendEmail } from '../actions';


class ContactForm extends Component {
    state = { startDate: moment(), message: null };

    handleDateChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    onSubmit(values) {
        this.props.sendEmail(values).then((e) => {this.setState({message: e.payload.data.msg})});
        console.log(this.props.email);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <section className="bg-dark pt-1" id="contactform">
                <form name="contact" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="container">
                        <EmailSubmitMessage emailMessage={this.state.message}/>
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
                                <label className="text-secondary">Estimated Start Date</label>
                                <DatePicker name="projectedDate" className="custom-select bg-dark" selected={this.state.startDate} onChange={this.handleDateChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label className="text-secondary">Building Type...</label>
                                <Field name="buildingTypes" component="select" className="custom-select bg-dark">
                                    {/* <option value="" disabled selected>Building Type...</option> */}
                                    <option value="MultiFamily">MultiFamily</option>
                                    <option value="SingleHome">SingleHome</option>
                                    <option value="Commercial">Commercial</option>
                                </Field>
                            </div>
                            <div className="form-group col-md-3">
                                <label className="text-secondary">Number of Units...</label>
                                <Field name="numberOfUnits" component="select" className="custom-select bg-dark">
                                    {/* <option value="" disabled selected>Number of Units...</option> */}
                                    <option value="1-100">1 - 99</option>
                                    <option value="101-200">100 - 199</option>
                                    <option value="200orMore">200 or More...</option>
                                </Field>
                            </div>
                            <div className="form-group col-md-3">
                                <label className="text-secondary">Number of Floors...</label>
                                <Field name="numberOfFloors" component="select" className="custom-select bg-dark">
                                    {/* <option value="" disabled selected>Number of Floors...</option> */}
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3orMore">3 or More...</option>
                                </Field>
                            </div>
                            <div className="form-group col-md-3">
                                <label className="text-secondary">Site-Building Phasing...</label>
                                <Field name="sitePhasing" component="select" className="custom-select bg-dark">
                                    {/* <option value="" disabled selected>Site-Building Phasing...</option> */}
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4orMore">4 or More...</option>
                                </Field>
                            </div>
                            <div className="form-group col-md-3">
                                <label className="text-secondary">Number of IDF's...</label>
                                <Field name="numberOfIdfs" component="select" className="custom-select bg-dark" >
                                    {/* <option value="" disabled selected>Number of IDF's...</option> */}
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4orMore">4 or More...</option>
                                </Field>
                            </div>
                        </div>
                        <div className="form-row mt-2">
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">Structured Cable</h5>
                                <hr className="mt-1" />
                                <Field name="c0" id="c0" htmlFor="c0" label="CAT5/6... cable" component={CheckBoxField} />
                                <Field name="c1" id="c1" htmlFor="c1" label="RG-11 homeruns" component={CheckBoxField} />
                                <Field name="c2" id="c2" htmlFor="c2" label="voice lines" component={CheckBoxField} />
                                <Field name="c3" id="c3" htmlFor="c3" label="3 sleeves" component={CheckBoxField} />
                                <Field name="c4" id="c4" htmlFor="c4" label="1.25 smoothwall innerduct" component={CheckBoxField} />
                                <Field name="c5" id="c5" htmlFor="c5" label="PVC 4 pipes" component={CheckBoxField} />
                            </div>
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">Access Control</h5>
                                <hr className="mt-1" />
                                <Field name="c8" id="c8" htmlFor="c8" label="Magnetic locks" component={CheckBoxField} />
                                <Field name="c9" id="c9" htmlFor="c9" label="Electric Strikes" component={CheckBoxField} />
                                <Field name="c10" id="c10" htmlFor="c10" label="Request to Exit" component={CheckBoxField} />
                                <Field name="c11" id="c11" htmlFor="c11" label="Proximity readers" component={CheckBoxField} />
                                <Field name="c12" id="c12" htmlFor="c12" label="panic bars" component={CheckBoxField} />
                            </div>
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">CCTV</h5>
                                <hr className="mt-1" />
                                <Field name="c13" id="c13" htmlFor="c13" label="indoor Dome Cameras" component={CheckBoxField} />
                                <Field name="c14" id="c14" htmlFor="c14" label="Outdoor Dome Cameras" component={CheckBoxField} />
                                <Field name="c15" id="c15" htmlFor="c15" label="License Plate Cameras" component={CheckBoxField} />
                                <Field name="c16" id="c16" htmlFor="c16" label="Elevator Cameras" component={CheckBoxField} />
                                <Field name="c17" id="c17" htmlFor="c17" label="Garage panic box" component={CheckBoxField} />
                                <Field name="c18" id="c18" htmlFor="c18" label="Conduit" component={CheckBoxField} />
                            </div>
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">Trim Out</h5>
                                <hr className="mt-1" />
                                <Field name="c6" id="c6" htmlFor="c6" label="phone outlets" component={CheckBoxField} />
                                <Field name="c7" id="c7" htmlFor="c7" label="comms enclosure" component={CheckBoxField} />
                            </div>
                        </div>
                        <div className="form-row mt-2">
                            <div className="form-group col-md-12">
                                <Field name="description" id="description" component="textarea" type="text" placeholder="Additional Description" className="form-control bg-dark text-white" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm btn-block">Submit</button>
                        <Link className="btn btn-primary btn-sm btn-block" to="/">Cancel</Link>
                    </div>
                </form>
            </section>
        );
    }
}


function mapStateToProps(state) {
    console.log(state);
    return { email: state.email };
}


export default reduxForm({
    form: 'NewContactForm'
})(
    connect(mapStateToProps, { sendEmail })(ContactForm)
);