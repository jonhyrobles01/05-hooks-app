import React, { useLayoutEffect, useRef, useState } from 'react';
import './layout.css';

import { useFetch } from './../../Hooks/useFetch';
import { useCounter } from './../../Hooks/useCounter';

export const LayoutEffect = () => {
  const {counter, increment} = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>Layout Effect</h1>

      <blockquote className='blockquote text-right'>
        <p
          className='mb-0'
          ref={ pTag }
        >
          { quote }
        </p>
      </blockquote>

      <pre>{ JSON.stringify(boxSize, null, 3) }</pre>

      <button 
        className='btn btn-primary' 
        onClick={ increment }
      >
        Next Quote
      </button>

    </div>
  )
}
