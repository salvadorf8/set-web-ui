import './Footer.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { MDBFooter } from 'mdbreact';

const MiniFooter = () => {
    return ReactDOM.createPortal(
        <MDBFooter id='minimizedfooter' className='font-small'>
            <div id='minimalFooter' className={`footer-copyright text-center py-3 mt-4`}>
                &copy; {new Date().getFullYear()} Copyright: <a href='http://www.streamlinewiring.com'>Streamlinewiring.com</a>
            </div>
        </MDBFooter>,
        document.querySelector('#minifooter')
    );
};

export default MiniFooter;
