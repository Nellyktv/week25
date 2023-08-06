import React, { useState } from 'react';
import './Hoooks.css';
function useCountNumbers() {
  const [count, setCount] = useState(0);
 
      return (
      <div>
      <button className='styleBtn' onClick={() => setCount(count + 1)}>{count + 1}</button>
    </div>
      )
  }

  export default useCountNumbers;