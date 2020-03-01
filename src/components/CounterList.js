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
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}



export default CounterList;
