import React from 'react';
import Counter from './Counter';

class CounterList extends React.Component {

  render() {
    return (
      <div className="App">
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}



export default CounterList;
