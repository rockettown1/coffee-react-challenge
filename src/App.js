import React, { Component } from "react";
import "./App.css";
import NameInput from "./components/NameInput";
import CurrentOrder from "./components/CurrentOrder";
import CoffeeInput from "./components/CoffeeInput";

class App extends Component {
  state = {
    currentName: "",
    currentCoffee: "",
    currentOrder: "",
    orders: [],
    showNameInput: true,
    showCoffeeInput: false
  };

  handleNameInput = event => {
    this.setState({ currentName: event.target.value });
  };
  handleCoffeeInput = event => {
    this.setState({ currentCoffee: ` would like a ${event.target.value}.` });
  };

  handleNameSubmit = () => {
    this.setState({ currentOrder: this.state.currentName, showNameInput: false, showCoffeeInput: true });
  };

  handleCoffeeSubmit = () => {
    let order = this.state.currentOrder;
    order += this.state.currentCoffee;
    let ordersArray = this.state.orders;
    ordersArray.push(order);
    this.setState({
      showCoffeeInput: false,
      showNameInput: true,
      orders: ordersArray,
      currentName: "",
      currentOrder: "",
      currentCoffee: ""
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Who wants coffee?</h1>
        {this.state.showNameInput && (
          <NameInput handleNameInput={this.handleNameInput} handleNameSubmit={this.handleNameSubmit} />
        )}
        {this.state.showCoffeeInput && (
          <CoffeeInput handleCoffeeInput={this.handleCoffeeInput} handleCoffeeSubmit={this.handleCoffeeSubmit} />
        )}
        <CurrentOrder currentOrder={this.state.currentOrder} />
        <div className="completed-orders">
          {this.state.orders.map((order, index) => {
            return <h2>{order}</h2>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
