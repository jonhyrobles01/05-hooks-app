import React from 'react';
import './fetch.css';

import { useFetch } from './../../Hooks/useFetch';
import { useCounter } from './../../Hooks/useCounter';

export const MultipleCustomHooks = () => {
  const {counter, increment} = useCounter(1);
  const url = 'https://www.breakingbadapi.com/api/quotes';
  const { loading, data } = useFetch(`${url}/${counter}`);
  const {author, quote} = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>

      {
        loading
          ?
            (
              <div className='alert alert-info text-center'>
                Loading...
              </div>
            )
          : 
            (
              <blockquote className='blockquote text-right'>
                <p>{quote}</p>
                <footer className='blockquote-footer'>{author}</footer>
              </blockquote>
            )
      }

      <button 
        className='btn btn-primary' 
        onClick={increment}
      >
        Next Quote
      </button>

    </div>
  )
}
