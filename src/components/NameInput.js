import React from "react";

const NameInput = props => {
  return (
    <div>
      <input type="text" onChange={event => props.handleNameInput(event)}></input>
      <button onClick={props.handleNameSubmit}>Add Name</button>
    </div>
  );
};

export default NameInput;
