import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div className="counter">
        <h1>{this.state.counter}</h1>
        <button>Increase</button>
        <button>Decrease</button>
      </div>
    )
  }
}


export default Counter;