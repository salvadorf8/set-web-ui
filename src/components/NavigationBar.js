import './NavigationBar.css';
import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBBtn, MDBIcon } from 'mdbreact';

class NavigationBar extends Component {
    state = { isOpen: false, contactNumber: '972-302-9892' };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <MDBNavbar className='elegant-color-dark' dark expand='md' id='mainNav' scrolling transparent>
                <MDBNavbarBrand>
                    <MDBNavLink exact to='/'>
                        STREAMLINE WIRING
                    </MDBNavLink>
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right></MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem className='align-self-center'>
                            <MDBNavLink exact to='/' onClick={this.toggleCollapse}>
                                Home
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem className='align-self-center'>
                            <MDBNavLink to='/contact/new' onClick={this.toggleCollapse}>
                                Contact Us
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBBtn size='sm' href='tel: 972-302-9892'>
                            <MDBIcon icon='phone' className='pr-2' />
                            972 302 9892
                        </MDBBtn>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavigationBar;
