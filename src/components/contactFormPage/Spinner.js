import React from 'react';
import './spinner.css';

const Spinner = (props) => {
	if (props.isLoading) {
		return (
			<div>
				<div id='loading' />
			</div>
		);
	}
	return <div />;
};

export default Spinner;
