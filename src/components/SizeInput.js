import React from "react";

const SizeInput = props => {
  return (
    <div>
      <input
        type="text"
        onChange={event => props.handleSizeInput(event)}
      ></input>
      <button onClick={props.handleSizeSubmit}>Add Size</button>
    </div>
  );
};

export default SizeInput;
