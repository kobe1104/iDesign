import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:0};
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState({count: this.state.count + 1});
  }

  render() {
      return (
        <div>
          <button onClick={this.addCount}>click me!</button>
          <div>Count: {this.state.count}</div>
        </div>
      );
  }
}

export default Counter;
