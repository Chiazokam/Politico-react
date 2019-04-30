import React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/example';

class Example extends React.Component {

  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return {
    count: state.example.count };
  }

const mapDispatchToProps = {
  increment,
  decrement,
};
    
export default connect(mapStateToProps, mapDispatchToProps)(Example);
