
import { useFetch } from '@/features/useFetch';
import { useInputChar } from '@/features/useInputChar';
import { useSubmit } from '@/features/useSubmit';
import React from 'react';

interface props {
    children: React.ReactNode
}

export const AnswerContext = React.createContext<Array<string>>([]);
export const GuessContext = React.createContext<Array<string>>([]);

const DataProvider = ({ children }: props) => {
    const answer = useFetch('https://random-word-api.herokuapp.com/word?length=5')
    const currentGuess = useInputChar();
    const submitResult = useSubmit(currentGuess, answer);
  return (
    <GuessContext.Provider value={currentGuess}>
    <AnswerContext.Provider value={answer}>
    <div>{ children }</div>
    <div>{currentGuess}</div>
    <div>{answer}</div>
    </AnswerContext.Provider>
    </GuessContext.Provider>
  )
}

export default DataProvider