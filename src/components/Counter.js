import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.onIncreaseClick = this.onIncreaseClick.bind(this);
    this.onDecreaseClick = this.onDecreaseClick.bind(this);
  }

  onIncreaseClick(e) {
    this.props.onIncreaseClick(this.props.counterNumber)
  }

  onDecreaseClick(e) {
    this.props.onDecreaseClick(this.props.counterNumber)
  }

  render() {
    return (
      <div className="counter">
        <div className="individual-counter">
          <h1>{this.props.count}</h1>
          <button onClick={this.onIncreaseClick}>Increase</button>
          <button onClick={this.onDecreaseClick}>Decrease</button>
        </div>
      </div>
    )
  }
}


export default Counter;