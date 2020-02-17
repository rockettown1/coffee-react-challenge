import React from "react";

const CoffeeInput = props => {
  return (
    <div>
      <input type="text" onChange={event => props.handleCoffeeInput(event)}></input>
      <button onClick={props.handleCoffeeSubmit}>Add Coffee</button>
    </div>
  );
};

export default CoffeeInput;
