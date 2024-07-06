//Task 2: Test the Counter Component in a Parent Component
//tested the app by clicking increment it went up 1 by clicking decrement it went down 1 and reset was able to reset the counter

import React from 'react';
import Counter from './Counter';

const Parent: React.FC = () => {
  return (
    <div>
      <h1>Testing Counter Component</h1>
      <Counter />
    </div>
  );
};

export default Parent;