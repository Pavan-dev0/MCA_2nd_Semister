import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter-container">
        <div className="counter-card">
          <h2>Class Counter</h2>
          <p className="counter-display">{this.state.count}</p>
          <div className="counter-buttons">
            <button className="counter-button" onClick={this.decrement}>
              -
            </button>
            <button className="counter-button counter-reset" onClick={this.reset}>
              Reset
            </button>
            <button className="counter-button" onClick={this.increment}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterClass;