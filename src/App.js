import React, { Component } from "react";
import "./App.css";
import NameInput from "./components/NameInput";
import CurrentOrder from "./components/CurrentOrder";
import CoffeeInput from "./components/CoffeeInput";
import SizeInput from "./components/SizeInput";
console.log("hello");

class App extends Component {
  state = {
    currentName: "",
    currentSize: "",
    currentCoffee: "",
    currentOrder: "",
    orders: [],
    orderNames: [],
    showNameInput: true,
    showSizeInput: false,
    showCoffeeInput: false,
    randomNameShow: false,
    randomName: ""
  };

  handleNameInput = event => {
    let capName = event.target.value.toUpperCase();
    this.setState({ currentName: capName });
  };

  handleSizeInput = event => {
    this.setState({ currentSize: ` would like a ${event.target.value}, ` });
  };

  handleCoffeeInput = event => {
    this.setState({ currentCoffee: `${event.target.value}.` });
  };

  handleNameSubmit = () => {
    let names = [...this.state.orderNames];
    let newName = this.state.currentName;
    names.push(newName);
    this.setState({
      currentOrder: newName,
      orderNames: names,
      showNameInput: false,
      showSizeInput: true,
      showCoffeeInput: false
    });
  };

  handleSizeSubmit = () => {
    let order = this.state.currentOrder;
    let cSize = this.state.currentSize;
    let afterOrder = order + cSize;
    this.setState({
      showNameInput: false,
      showSizeInput: false,
      showCoffeeInput: true,
      currentOrder: afterOrder
    });
  };

  handleCoffeeSubmit = () => {
    let order = this.state.currentOrder;
    order += this.state.currentCoffee;
    let ordersArray = this.state.orders;
    ordersArray.push(order);
    this.setState({
      showCoffeeInput: false,
      showSizeInput: false,
      showNameInput: true,
      orders: ordersArray,
      currentName: "",
      currentSize: "",
      currentOrder: "",
      currentCoffee: ""
    });
  };

  orderDelete = index => {
    let newOrders = [...this.state.orders];
    let newOrderNames = [...this.state.orderNames];
    newOrders.splice(index, 1);
    newOrderNames.splice(index, 1);
    this.setState({
      orders: newOrders,
      orderNames: newOrderNames
    });
  };

  handleRandomName = () => {
    let randomNameNumGen = Math.floor(
      Math.random() * this.state.orderNames.length
    );
    let randomNameGen = this.state.orderNames[randomNameNumGen];
    this.setState({
      randomName: randomNameGen,
      randomNameShow: true
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Who wants coffee?</h1>
        {this.state.showNameInput && (
          <NameInput
            handleNameInput={this.handleNameInput}
            handleNameSubmit={this.handleNameSubmit}
          />
        )}
        {this.state.showSizeInput && (
          <SizeInput
            handleSizeInput={this.handleSizeInput}
            handleSizeSubmit={this.handleSizeSubmit}
          />
        )}
        {this.state.showCoffeeInput && (
          <CoffeeInput
            handleCoffeeInput={this.handleCoffeeInput}
            handleCoffeeSubmit={this.handleCoffeeSubmit}
          />
        )}
        <CurrentOrder currentOrder={this.state.currentOrder} />
        {this.state.randomNameShow ? (
          <h3>{this.state.randomName}</h3>
        ) : (
          <h3 onClick={() => this.handleRandomName()}>
            Click to choose random name from order list
          </h3>
        )}
        <div className="completed-orders">
          {this.state.orders.map((order, index) => {
            return (
              <div className="orders">
                <h2>{order}</h2>
                <button onClick={() => this.orderDelete(index)}>x</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
