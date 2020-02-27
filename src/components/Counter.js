import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrease = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }  

  render() {
    return (
      <div className="counter">
        <div className="individual-counter">
          <h1>{this.state.counter}</h1>
          <button onClick={this.increase}>Increase</button>
          <button onClick={this.decrease}>Decrease</button>
        </div>
        <div className="all-counters">
          <button>Increase all</button>
          <button>Decrease all</button>
        </div>
      </div>
    )
  }
}


export default Counter;