import React from 'react';
import Counter from './Counter';

class CounterList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0
    }
  }

  render() {
    return (
      <div className="counter-list">
      
        <Counter 
          //counterNumber={1}
          //count
          //increase
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

      <div className="allIncreaseDecrease">
        <button>Increase All</button>
        <button>Decrease All</button>
      </div>

      </div>
    )
  }
}



export default CounterList;
