import React, { useMemo, useState } from 'react';
import './memorize.css';
import { useCounter } from './../../Hooks/useCounter';
import { HighProcess } from './../../helpers/HighProcess';

export const MemoHook = () => {
  const {counter, increment} = useCounter(5000);
  const [show, setShow] = useState(true);  

  const memoHighProcess = useMemo(() => HighProcess(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>Counter: <small>{ counter }</small> </h3>
      <hr />

      <p>{ memoHighProcess }</p>

      <button
        className='btn btn-primary mr-1'
        onClick={ increment }
      >
        +1
      </button>

      <button 
        className='btn btn-outline-primary ml-3'
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </div>
  )
}
