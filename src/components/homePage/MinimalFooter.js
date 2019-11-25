import '../homePage/Footer.css';
import React from 'react';
import { MDBFooter } from 'mdbreact';

const MinimalFooter = ({ isFixed }) => {
    return (
        <MDBFooter id='mainFooter' className='font-small mt-5'>
            <div id='minimalFooter' className={`footer-copyright text-center py-3 mt-4 ${isFixed}`}>
                &copy; {new Date().getFullYear()} Copyright: <a href='http://www.streamlinewiring.com'>Streamlinewiring.com</a>
            </div>
        </MDBFooter>
    );
};

export default MinimalFooter;
