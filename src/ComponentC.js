import React from 'react';
import { useSelector } from 'react-redux';

function ComponentC() {
  const inputValue = useSelector(state => state.inputValue);

  return (
    <div>{inputValue}</div>
  );
}

export default ComponentC;
