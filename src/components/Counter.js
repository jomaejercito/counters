import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.onIncreaseClick = this.onIncreaseClick.bind(this);

  }

  onIncreaseClick(e) {
    this.props.onIncreaseClick(this.props.counterNumber)
  }

  // decrease = () => {
  //   this.setState({
  //     counter: this.state.counter - 1
  //   })
  // }  

  render() {
    return (
      <div className="counter">
        <div className="individual-counter">
          <h1>{this.props.count}</h1>
          <button onClick={this.onIncreaseClick}>Increase</button>
          <button onClick={this.decrease}>Decrease</button>
        </div>
      </div>
    )
  }
}


export default Counter;