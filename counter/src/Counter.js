import React, { useState } from 'react';
// class Counter extends React.Component {
//     state = { count: 0 }
//     increment = () => this.setState(({ count }) => ({ count: count + 1 }))
//     render() {
//         return this.props.children({
//             count: this.state.count,
//             increment: this.increment,
//         })
//     }
// }
// Case 2

// function Counter(props) {
//     const [count, setCount] = useState(0)
//     const increment = () => setCount(currentCount => currentCount + 1)
//     return props.children({
//         count: count,
//         increment,
//     })
// }


function useCounter() {
    const [count, setCount] = useState(0)
    const increment = () => setCount(currentCount => currentCount + 1)
    return { count, increment }
}

// function Counter() {
//     const { count, increment } = useCounter()
//     return <button onClick={increment}>{count}</button>
// }
const Counter = ({children, ...props}) => children(useCounter(props))



export default Counter;
