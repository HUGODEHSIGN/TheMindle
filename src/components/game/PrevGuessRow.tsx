import React from 'react'
import LetterBox from './LetterBox'
import { useSubmit } from '@/features/useSubmit'

const PrevGuessRow = () => {

  return (
    <>
    <div className='grid grid-cols-5 gap-1'>
    <LetterBox>T</LetterBox>
    <LetterBox>T</LetterBox>
    <LetterBox>T</LetterBox>
    <LetterBox>T</LetterBox>
    <LetterBox>T</LetterBox>
    </div>
    </>
  )
}

export default PrevGuessRow