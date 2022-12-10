import React from 'react';

export default function Button({ handleClick, value }) {
  return (
    <button className='btn' onClick={handleClick}>
      {value}
    </button>
  );
}