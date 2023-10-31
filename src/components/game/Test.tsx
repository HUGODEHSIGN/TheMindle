import React from 'react';
import { useContext } from 'react';
import { AnswerContext } from '../context/DataContext';

const Test = () => {
    const answer = useContext(AnswerContext)
  return (
    <div>{answer}</div>
  )
}

export default Test