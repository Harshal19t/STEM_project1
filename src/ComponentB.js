import React from 'react';
import { useDispatch } from 'react-redux';

function ComponentB() {
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch({ type: 'SET_INPUT_VALUE', payload: event.target.value });
  }

  return (
    <input type="text" onChange={handleChange} />
  );
}

export default ComponentB;