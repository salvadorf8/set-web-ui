import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';

// import Routes from "./Routes";

class NavigationBar extends Component {
	state = { collapseID: '' };

	toggleCollapse = (collapseID) => () =>
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}));

	closeCollapse = (collapseID) => () => this.state.collapseID === collapseID && this.setState({ collapseID: '' });

	render() {
		const overlay = <div id='sidenav-overlay' style={{ backgroundColor: 'transparent' }} onClick={this.toggleCollapse('mainNavbarCollapse')} />;
		return (
			<div className='container'>
				<Navbar color='indigo' dark expand='md' scrolling id='mainNav'>
					<NavbarBrand href='/'>STREAMLINE WIRING</NavbarBrand>
					<NavbarToggler onClick={this.toggleCollapse('mainNavbarCollapse')} />
					<Collapse id='mainNavbarCollapse' isOpen={this.state.collapseID} navbar>
						<NavbarNav right>
							<NavItem>
								<NavLink exact to='/' onClick={this.closeCollapse('mainNavbarCollapse')}>
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink onClick={this.closeCollapse('mainNavbarCollapse')} to='/contact/new'>
									Contact Us
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink onClick={this.closeCollapse('mainNavbarCollapse')} to=''>
									Phone: 817 909 2138
								</NavLink>
							</NavItem>
						</NavbarNav>
					</Collapse>
				</Navbar>
				{this.state.collapseID && overlay}
			</div>
		);
	}
}

export default NavigationBar;
