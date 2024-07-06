//Task 1: Create a Functional Component Named Counter 
// created a functional component named counter that has buttons that allow us to increase by 1, decrease by 1, or reset the counter

import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
  return (
    <div>
         <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      
    </div>
  )
}

export default Counter
