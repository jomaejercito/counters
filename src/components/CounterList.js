import React from 'react';
import Counter from './Counter';

class CounterList extends React.Component {
  constructor(props) {
    super(props)
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    // this.increaseAll = this.increaseAll.bind(this);
    // this.decreaseAll = this.decreaseAll.bind(this);

    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0
    }
  }

  increaseCount(counterNumber){
    const counter = `counter${counterNumber}`
    this.setState({ [counter]: this.state[counter] + 1 });
  }

  decreaseCount(counterNumber){
    const counter = `counter${counterNumber}`
    this.setState({ [counter]: this.state[counter] - 1 });
  }

  // increaseAll() {}

  // decreaseAll() {}


  render() {
    return (
      <div className="counter-list">
      
        <Counter 
          counterNumber={1}
          count={this.state.counter1}
          onIncreaseClick={this.increaseCount}
          onDecreaseClick={this.decreaseCount}
        />

        <Counter 
          counterNumber={2}
          count={this.state.counter2}
          onIncreaseClick={this.increaseCount}
          onDecreaseClick={this.decreaseCount}
        />

        <Counter 
          counterNumber={3}
          count={this.state.counter3}
          onIncreaseClick={this.increaseCount}
          onDecreaseClick={this.decreaseCount}
        />

      <br></br><br></br>
      
      <div className="allIncreaseDecrease">
        <button>Increase All</button>
        <button>Decrease All</button>
      </div>

      </div>
    )
  }
}



export default CounterList;
