import React from 'react';
import Counter from './Counter';

class CounterList extends React.Component {
  constructor(props) {
    super(props)
    this.increaseCount = this.increaseCount.bind(this);

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

  render() {
    return (
      <div className="counter-list">
      
        <Counter 
          counterNumber={1}
          count={this.state.counter1}
          onIncreaseClick={this.increaseCount}
          //decrease
        />

        <Counter 
          //counterNumber={2}
          //count
          //increase
          //decrease
        />

        <Counter 
          //counterNumber={3}
          //count
          //increase
          //decrease
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
