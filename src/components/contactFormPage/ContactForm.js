import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import EmailSubmitMessage from './EmailSubmitMessage';
import CheckBoxField from './CheckBoxField';
import { sendEmail } from '../../actions';
import ReactDatePicker from './ReactDatePicker';
import DropDownBox from './DropDownBox';


class ContactForm extends Component {
    state = { 
        selectedDate: new Date(),  
        message: "",
        buildingTypes: ["Multi Family", "Single Home", "Commercial"],
        numberOfUnits: ["1 - 99","100 - 199","200 or More..."],
        numberOfFloors: ["1", "2", "3 or more..."],
        numberOfSitePhasing: ["1", "2", "3", "4 or more..."],
        numberOfIDFs: ["1", "2", "3", "4 or more..."],
        sending: true
    };

    //With redux-form, we no longer need to handle with an event
    onSubmit = (formValues) => {
        this.props.sendEmail(formValues).then(
            () => this.setState({ message: this.props.responseMessage })
        );
    }

    render() {
        return (
            <section className="bg-dark pt-1" id="contactform">
                <form name="contact" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="container">
                        <EmailSubmitMessage emailMessage={this.state.message} />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <Field name="firstName" placeholder="First Name" className="form-control bg-dark" component="input" />
                            </div>
                            <div className="form-group col-md-6">
                                <Field name="lastName" placeholder="Last Name" className="form-control bg-dark" component="input" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <Field name="email" placeholder="Email" className="form-control bg-dark" component="input" />
                            </div>

                            <div className="form-group col-md-6">
                                <Field name="phone" placeholder="Phone" className="form-control bg-dark" component="input" />00
                            </div>
                        </div>
                        <h5 className="section-heading text-white mt-4 text-center">Property Details</h5>
                        <hr className="mt-1" />
                        <div className="form-row">
                            {/* ReactDatePicker library */}                               
                            <Field name="date" className="form-control bg-dark" value={this.state.selectedDate} label="Approximate Start" component={ReactDatePicker} />
                            <DropDownBox name="buildingType" className="custom-select  bg-dark" label="Building Type" values={this.state.buildingTypes} />
                            <DropDownBox name="numberOfUnits" className="custom-select  bg-dark" label="Number of Units" values={this.state.numberOfUnits} />
                            <DropDownBox name="numberOfFloors" className="custom-select  bg-dark" label="Number of Floors" values={this.state.numberOfFloors} />
                            <DropDownBox name="sitePhasing" className="custom-select  bg-dark" label="Site-Building Phasing" values={this.state.numberOfSitePhasing} />
                            <DropDownBox name="numberOfIdfs" className="custom-select  bg-dark" label="Number of IDF's" values={this.state.numberOfIDFs} />
                        </div>
                        <div className="form-row mt-2">
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">Structured Cable</h5>
                                <hr className="mt-1" />
                                <Field name="c0" id="c0" htmlFor="c0" label="CAT5/6... cable" component={CheckBoxField} />
                                <Field name="c1" id="c1" htmlFor="c1" label="RG-11 Homeruns" component={CheckBoxField} />
                                <Field name="c2" id="c2" htmlFor="c2" label="Voice Lines" component={CheckBoxField} />
                                <Field name="c3" id="c3" htmlFor="c3" label="3 Sleeves" component={CheckBoxField} />
                                <Field name="c4" id="c4" htmlFor="c4" label="1.25 Smoothwall Innerduct" component={CheckBoxField} />
                                <Field name="c5" id="c5" htmlFor="c5" label="PVC 4 Pipes" component={CheckBoxField} />
                            </div>
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">Access Control</h5>
                                <hr className="mt-1" />
                                <Field name="c8" id="c8" htmlFor="c8" label="Magnetic Locks" component={CheckBoxField} />
                                <Field name="c9" id="c9" htmlFor="c9" label="Electric Strikes" component={CheckBoxField} />
                                <Field name="c10" id="c10" htmlFor="c10" label="Request to Exit" component={CheckBoxField} />
                                <Field name="c11" id="c11" htmlFor="c11" label="Proximity Readers" component={CheckBoxField} />
                                <Field name="c12" id="c12" htmlFor="c12" label="Panic Bars" component={CheckBoxField} />
                            </div>
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">CCTV</h5>
                                <hr className="mt-1" />
                                <Field name="c13" id="c13" htmlFor="c13" label="Indoor Dome Cameras" component={CheckBoxField} />
                                <Field name="c14" id="c14" htmlFor="c14" label="Outdoor Dome Cameras" component={CheckBoxField} />
                                <Field name="c15" id="c15" htmlFor="c15" label="License Plate Cameras" component={CheckBoxField} />
                                <Field name="c16" id="c16" htmlFor="c16" label="Elevator Cameras" component={CheckBoxField} />
                                <Field name="c17" id="c17" htmlFor="c17" label="Garage panic box" component={CheckBoxField} />
                                <Field name="c18" id="c18" htmlFor="c18" label="Conduit" component={CheckBoxField} />
                            </div>
                            <div className="form-group col-md-3">
                                <h5 className="section-heading text-white mt-3 text-center">Trim Out</h5>
                                <hr className="mt-1" />
                                <Field name="c6" id="c6" htmlFor="c6" label="Phone Outlets" component={CheckBoxField} />
                                <Field name="c7" id="c7" htmlFor="c7" label="Comms Enclosure" component={CheckBoxField} />
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
    return { responseMessage: state.emailAPIResponse.msg };
}


export default reduxForm({
    form: 'NewContactForm'
})(
    connect(mapStateToProps, { sendEmail })(ContactForm)
);