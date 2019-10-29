// import React from 'react';

// class Counter extends React.Component {
//     state = { count: 0 }
//     increment = () => this.setState(({ count }) => ({ count: count + 1 }))
//     render() {
//         return <button onClick={this.increment}>{this.state.count}</button>
//     }
// }

// export default Counter;


// counter.js
import React , {useState} from 'react'
function Counter() {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount(c => c + 1)
  return <button onClick={incrementCount}>{count}</button>
}
export default Counter