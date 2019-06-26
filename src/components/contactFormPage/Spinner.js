import React from "react";
import './spinner.css';

const Spinner = (props) => {
  if (props.loading) {
    return (
      <div>
        <div id="loading"></div>
      </div>
    );
  }
  return <div></div>
}

export default Spinner;